import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";

export const Route = createFileRoute("/visit")({
  component: Visit,
});

function Visit() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">Location & Surroundings</span>
        <h1 className="text-5xl font-serif text-stone-900 mb-8">Visit Honnavar</h1>
        <p className="text-stone-600 text-lg leading-relaxed italic">
          {SITE_CONTENT.visit.locationDescription}
        </p>
      </div>

      <div className="space-y-16 mb-24">
        {SITE_CONTENT.visit.attractions.map((attr, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <span className="text-[10px] uppercase tracking-widest text-stone-400">{attr.distance}</span>
              <h3 className="text-2xl font-serif text-stone-900 mt-2 mb-4">{attr.name}</h3>
              <p className="text-stone-600 leading-relaxed">{attr.note}</p>
            </div>
            <div className="aspect-video bg-stone-100 flex items-center justify-center text-stone-300 italic text-xs">
              [Visual: {attr.name}]
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-stone-100 p-12">
        <h2 className="text-2xl font-serif text-stone-900 mb-8">Guest Notes</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="font-bold text-stone-800 uppercase tracking-tighter mb-2">Reservations</h4>
            <p className="text-stone-600">{SITE_CONTENT.guestNotes.reservations}</p>
          </div>
          <div>
            <h4 className="font-bold text-stone-800 uppercase tracking-tighter mb-2">Dress Code</h4>
            <p className="text-stone-600">{SITE_CONTENT.guestNotes.dressCode}</p>
          </div>
          <div>
            <h4 className="font-bold text-stone-800 uppercase tracking-tighter mb-2">Families</h4>
            <p className="text-stone-600">{SITE_CONTENT.guestNotes.children}</p>
          </div>
          <div>
            <h4 className="font-bold text-stone-800 uppercase tracking-tighter mb-2">Events</h4>
            <p className="text-stone-600">{SITE_CONTENT.guestNotes.privateEvents}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
