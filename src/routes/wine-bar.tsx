import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout"; import bar from "@/assets/julius-bar.jpg";

export const Route = createFileRoute("/wine-bar")({
  head:()=>({meta:Meta({title:"Wine & Bar | JULIUS",description:"Wine, signature cocktails and sophisticated coastal evenings at JULIUS."})}),
  component: WineBar,
});

function WineBar() {
  return (
    <JuliusLayout><PageHero eyebrow="Wine & bar" title="When the light lowers, the room changes." intro="Cellar-led pours, elegant cocktails and a bar with the warm, unhurried mood of the coast after dark." image={bar}/><section className="menu-wrap bg-deep">
      <div className="menu-section"><h2 className="font-display text-5xl">
          Signature Infusions
        </h2>
        <div className="mt-6">
          {SITE_CONTENT.wineBar.signatures.map((item, i) => (
            <div key={i} className="menu-item"><div><h3>{item.name}</h3><p>{item.description}</p></div><span>₹{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-section"><h3 className="eyebrow text-primary">From the cellar</h3><p className="mt-6 max-w-xl font-display text-3xl leading-relaxed">
          {SITE_CONTENT.wineBar.wineNote}
        </p>
      </div>
    </section></JuliusLayout>
  );
}
