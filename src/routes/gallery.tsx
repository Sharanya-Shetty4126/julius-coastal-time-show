import { createFileRoute } from "@tanstack/react-router";
import { JuliusLayout, Meta, PageHero } from "@/components/JuliusLayout"; import sunset from "@/assets/julius-coast-sunset.jpg"; import morning from "@/assets/julius-coast-morning.jpg"; import dining from "@/assets/julius-dining.jpg"; import seafood from "@/assets/julius-seafood.jpg"; import bar from "@/assets/julius-bar.jpg"; import coast from "@/assets/julius-honnavar.jpg";

export const Route = createFileRoute("/gallery")({
  head:()=>({meta:Meta({title:"Gallery | JULIUS Honnavar",description:"A visual journal of food, drinks, gatherings and coastal moments at JULIUS."})}),
  component: Gallery,
});

function Gallery() {
  const images = [dining,seafood,bar,coast,sunset,morning];

  return (
    <JuliusLayout><PageHero eyebrow="Seen at JULIUS" title="Light, plates, people, moments." intro="A living album of food, evenings, celebrations and the coast that gives JULIUS its character." image={sunset}/><section className="gallery-grid">
        {images.map((img, i) => (
          <figure key={img} className={`gallery-${i+1}`}><img src={img} alt={["JULIUS dining room","Seafood plate","Cocktail and wine","Honnavar coast","Coastal sunset","Coastal morning"][i]} loading="lazy"/></figure>
        ))}
      </section></JuliusLayout>
  );
}
