import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  const images = [
    { title: "The Confluence", category: "Location" },
    { title: "Ghee Roast Prawns", category: "Cuisine" },
    { title: "Sunset Terrace", category: "Ambiance" },
    { title: "Sharavati Estuary", category: "Nature" },
    { title: "Azure Bar Interior", category: "Ambiance" },
    { title: "Local Artisanal Catch", category: "Heritage" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">Visual Journal</span>
        <h1 className="text-5xl font-serif text-stone-900">Gallery</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="group relative overflow-hidden bg-stone-100 aspect-[4/5]">
            <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic text-sm">
              [Visual: {img.title}]
            </div>
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-stone-50">
                <p className="text-[10px] uppercase tracking-widest mb-1 text-stone-300">{img.category}</p>
                <h3 className="text-lg font-serif italic">{img.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
