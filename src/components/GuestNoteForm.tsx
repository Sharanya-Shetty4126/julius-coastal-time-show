
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export function GuestNoteForm() {
  const [quote, setQuote] = useState("");
  const [by, setBy] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const trimmedQuote = quote.trim();
    const trimmedBy = by.trim() || "A guest";

    if (trimmedQuote.length < 5) {
      setError("Please write a little more.");
      return;
    }

    if (trimmedQuote.length > 400) {
      setError("Please keep it under 400 characters.");
      return;
    }

    if (trimmedBy.length > 80) {
      setError("Please keep your name under 80 characters.");
      return;
    }

    setStatus("sending");

    try {
      const { error: insertError } = await supabase
        .from("guest_notes")
        .insert({
          quote: trimmedQuote,
          by: trimmedBy,
        });

      if (insertError) {
        console.error("Guest note submission failed:", insertError);
        setError("We couldn't send your note. Please try again.");
        setStatus("error");
        return;
      }

      setQuote("");
      setBy("");
      setStatus("done");
    } catch (err) {
      console.error("Unexpected guest note error:", err);
      setError("A connection error occurred. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-2xl rounded-md border border-border bg-background/60 p-8 text-center">
        <p className="font-display text-3xl">Thank you.</p>

        <p className="mt-3 text-sm text-muted-foreground">
          Your note has been added to our guestbook. Thank you
          for sharing a memory with us.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setError("");
          }}
          className="mt-6 text-xs uppercase tracking-widest text-primary hover:underline"
        >
          Leave another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-md border border-border bg-background/60 p-6 md:p-8"
    >
      <p className="eyebrow text-primary">Leave a note</p>

      <h3 className="mt-3 font-display text-3xl md:text-4xl">
        Tell us how the evening felt.
      </h3>

      <label className="mt-6 block">
        <span className="sr-only">Your note</span>

        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          rows={4}
          maxLength={400}
          placeholder="A memory, a favourite dish, a moment at the table…"
          className="w-full resize-none rounded-sm border border-input bg-transparent px-4 py-3 text-sm leading-6 outline-none focus:border-primary"
          required
        />

        <span className="mt-1 block text-right text-xs text-muted-foreground">
          {quote.length}/400
        </span>
      </label>

      <label className="mt-4 block">
        <span className="sr-only">Your name (optional)</span>

        <input
          value={by}
          onChange={(e) => setBy(e.target.value)}
          maxLength={80}
          placeholder="Your name (optional)"
          className="w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </label>

      {error && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send note"}
      </Button>
    </form>
  );
}