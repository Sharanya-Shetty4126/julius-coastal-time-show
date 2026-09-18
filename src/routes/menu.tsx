import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";

export const Route = createFileRoute("/menu")({
  component: Menu,
});

function Menu() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">Culinary Arts</span>
        <h1 className="text-5xl font-serif text-stone-900">The Tides & The Terroir</h1>
      </div>
      
      {SITE_CONTENT.menu.sections.map((section, idx) => (
        <div key={idx} className="mb-20">
          <h2 className="text-2xl font-serif border-b border-stone-200 pb-4 mb-10 text-stone-800 tracking-tight">
            {section.title}
          </h2>
          <div className="space-y-10">
            {section.items.map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors italic">
                    {item.name}
                  </h3>
                  <span className="text-stone-400 text-sm">₹{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-stone-50 p-8 text-center border border-stone-100">
        <p className="text-stone-400 text-xs uppercase tracking-widest italic">
          All prices are in INR. Government taxes as applicable.
        </p>
      </div>
    </div>
  );
}
