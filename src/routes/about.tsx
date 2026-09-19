import { createFileRoute } from "@tanstack/react-router";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout";
import dining from "@/assets/julius-dining.jpg"; import coast from "@/assets/julius-honnavar.jpg";

export const Route = createFileRoute("/about")({
  head:()=>({meta:Meta({title:"Our Story | JULIUS Honnavar",description:"The coastal influence, food philosophy and warm hospitality behind JULIUS."})}),
  component: About,
});

function About() {
  return <JuliusLayout><PageHero eyebrow="Our story" title="Rooted here. Open to the world." intro="JULIUS is imagined from the textures of Honnavar—river, sea, spice, rain and the natural generosity of a coastal table." image={dining}/><section className="section-grid"><p className="eyebrow">The idea</p><div><h2 className="section-title">A restaurant with the coast in its bones.</h2><p className="body-copy mt-8">The food culture of Coastal Karnataka is abundant and exacting: fish chosen with care, spice layered rather than shouted, and hospitality that never feels performed. JULIUS translates that spirit into a contemporary restaurant and bar—refined, relaxed and made for every generation at the table.</p></div></section><section className="image-statement"><img src={coast} alt="Honnavar backwaters and coast" loading="lazy"/><div className="hero-shade"/><h2>Honnavar is not a backdrop.<br/>It is the beginning.</h2></section></JuliusLayout>;
}
