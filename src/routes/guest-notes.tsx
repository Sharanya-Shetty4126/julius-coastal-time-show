import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout";
import { GuestNoteForm } from "@/components/GuestNoteForm";
// import { guestNotes as staticNotes } from "@/lib/content";
import { supabase, type GuestNote } from "@/lib/supabase";
import dining from "@/assets/julius-dining.jpg";

export const Route = createFileRoute("/guest-notes")({
  head: () => ({
    meta: Meta({
      title: "Guest Notes | JULIUS",
      description:
        "Memories from lunches, family dinners and coastal evenings at JULIUS.",
    }),
  }),
  component: GuestNotes,
});

function GuestNotes() {
  const [guest, setGuest] = useState<GuestNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("guest_notes")
      .select("id, quote, by, created_at")
      .order("created_at", { ascending: false })
      .limit(30)
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setGuest(data ?? []);
        setLoading(false);
      });
  }, []);

  // Curated notes first (yours), then visitor notes
  const allNotes = guest;
  return (
    <JuliusLayout>
      <PageHero
        eyebrow="Guest notes"
        title="Things people left with us."
        intro="Small memories from long lunches, family dinners, first visits and evenings that became stories."
        image={dining}
      />

      <section className="notes-board">
        {allNotes.map((note, i) => (
          <blockquote

            key={`${note.quote}-${i}`}
            className={`note note-${(i % 4) + 1}`}
          >
            <p>"{note.quote}"</p>
            <cite>— {note.by}</cite>
          </blockquote>
        ))}
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-2xl">
          <GuestNoteForm />
        </div>
      </section>
    </JuliusLayout>
  );
}

