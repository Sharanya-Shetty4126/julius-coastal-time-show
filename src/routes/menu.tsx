import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout";
import seafood from "@/assets/julius-seafood.jpg";

export const Route = createFileRoute("/menu")({
  head:()=>({meta:Meta({title:"Menu | JULIUS Honnavar",description:"Explore seafood, coastal specialties, mains and desserts at JULIUS."})}),
  component: Menu,
});

function Menu() {
  return (
    <JuliusLayout><PageHero eyebrow="The menu" title="The day’s catch, thoughtfully served." intro="A seafood-forward menu built around freshness, local character and food that belongs at the centre of the table." image={seafood}/><section className="menu-wrap">
      {SITE_CONTENT.menu.sections.map((section, idx) => (
        <div key={idx} className="menu-section">
          <h2 className="font-display text-4xl md:text-5xl">
            {section.title}
          </h2>
          <div className="mt-6">
            {section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div><h3>
                    {item.name}
                  </h3><p>
                  {item.description}
                </p></div><span>₹{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="border border-border p-8 text-center">
        <p className="eyebrow text-muted-foreground">
          All prices are in INR. Government taxes as applicable.
        </p>
      </div>
    </section></JuliusLayout>
  );
}
