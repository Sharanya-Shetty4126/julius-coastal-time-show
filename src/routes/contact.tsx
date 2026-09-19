import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";
import { Clock3, Mail, MapPin } from "lucide-react";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout"; import night from "@/assets/julius-coast-night.jpg";

export const Route = createFileRoute("/contact")({
  head:()=>({meta:Meta({title:"Contact & Collaborations | JULIUS",description:"Plan a visit, celebration or creative collaboration with JULIUS in Honnavar."})}),
  component: Contact,
});

function Contact() {
  return (
    <JuliusLayout><PageHero eyebrow="Contact" title="Your table by the coast." intro="Plan a meal, a celebration, a creative collaboration or simply your next evening in Honnavar." image={night}/><section className="contact-grid"><div><p className="eyebrow">Reservations & enquiries</p><h2 className="section-title mt-6">Come find your evening.</h2><div className="mt-10 grid gap-5 text-muted-foreground"><p className="flex gap-3"><MapPin className="shrink-0 text-primary"/> {SITE_CONTENT.contact.address}</p><p className="flex gap-3"><Clock3 className="shrink-0 text-primary"/> Opening hours to be confirmed</p><p className="flex gap-3"><Mail className="shrink-0 text-primary"/> Restaurant email to be confirmed</p></div></div><div className="collab"><p className="eyebrow text-wine">Collaborations</p><h2 className="mt-5 font-display text-5xl text-ink">Make something memorable with us.</h2><p className="mt-6 leading-7 text-ink/70">We welcome thoughtful ideas from food and travel creators, photographers, writers, event hosts and brands with a shared feeling for the coast.</p><p className="mt-8 text-sm text-wine">Collaboration contact to be confirmed</p></div></section></JuliusLayout>
  );
}
