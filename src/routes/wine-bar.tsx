import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";

export const Route = createFileRoute("/wine-bar")({
  component: WineBar,
});

function WineBar() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">The Azure Bar</span>
        <h1 className="text-5xl font-serif text-stone-900 mb-8">Coastal Spirits</h1>
        <p className="text-stone-600 italic max-w-2xl mx-auto">
          {SITE_CONTENT.wineBar.editorial}
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-serif border-b border-stone-200 pb-4 mb-10 text-stone-800 tracking-tight">
          Signature Infusions
        </h2>
        <div className="space-y-10">
          {SITE_CONTENT.wineBar.signatures.map((item, i) => (
            <div key={i} className="flex justify-between items-baseline">
              <div>
                <h3 className="text-lg font-medium text-stone-900 italic">{item.name}</h3>
                <p className="text-stone-500 text-sm mt-1">{item.description}</p>
              </div>
              <span className="text-stone-400 text-sm">₹{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 p-12 bg-stone-900 text-stone-50 text-center">
        <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6">From The Cellar</h3>
        <p className="text-xl font-serif italic max-w-xl mx-auto leading-relaxed">
          {SITE_CONTENT.wineBar.wineNote}
        </p>
      </div>
    </div>
  );
}
