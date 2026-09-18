import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">Contact & Connect</span>
        <h1 className="text-5xl font-serif text-stone-900 mb-8">Reservations</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-6">Inquiries</h3>
          <div className="space-y-8 text-stone-800">
            <div>
              <p className="text-[10px] uppercase text-stone-400 mb-1">Direct Line</p>
              <p className="text-xl font-serif italic">{SITE_CONTENT.contact.phone}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-stone-400 mb-1">Email</p>
              <p className="text-xl font-serif italic">{SITE_CONTENT.contact.email}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-stone-400 mb-1">Collaborations</p>
              <p className="text-xl font-serif italic">{SITE_CONTENT.contact.collaborations}</p>
            </div>
          </div>
        </div>

        <div className="bg-stone-900 text-stone-50 p-12">
          <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-6">Find Us</h3>
          <p className="text-lg leading-relaxed italic mb-8">
            {SITE_CONTENT.contact.address}
          </p>
          <div className="h-48 bg-stone-800 flex items-center justify-center text-stone-600 italic text-xs">
            [Interactive Map Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
