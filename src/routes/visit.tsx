import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout"; import coast from "@/assets/julius-honnavar.jpg";

export const Route = createFileRoute("/visit")({
  head:()=>({meta:Meta({title:"Visit Honnavar | JULIUS",description:"Explore Honnavar’s backwaters, beaches and coastal sights, then arrive at JULIUS."})}),
  component: Visit,
});

function Visit() {
  return (
    <JuliusLayout><PageHero eyebrow="The journey" title="Explore the coast. Arrive at JULIUS." intro="Honnavar is a meeting of river and sea—green islands, long bridges, temple hills and beaches that hold the evening light." image={coast}/><section className="destination-list">
        {SITE_CONTENT.visit.attractions.map((attr, i) => (
          <article key={attr.name}><span className="font-mono text-xs text-primary">{String(i+1).padStart(2,"0")} · {attr.distance}</span><h2 className="font-display text-4xl md:text-6xl">{attr.name}</h2><p>{attr.note}</p></article>
        ))}
      <article><span className="font-mono text-xs text-primary">04 · Your destination</span><h2 className="font-display text-4xl md:text-6xl">JULIUS</h2><p>End the journey at a table where the coast finds its way onto every plate.</p></article>
    </section></JuliusLayout>
  );
}
