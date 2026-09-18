import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-stone-200/20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-6 tracking-tight">
            {SITE_CONTENT.brand.name}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-serif italic mb-8">
            {SITE_CONTENT.brand.tagline}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/menu" className="bg-stone-900 text-stone-50 px-8 py-3 text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors">
              Explore Menu
            </Link>
            <Link to="/about" className="border border-stone-900 text-stone-900 px-8 py-3 text-sm uppercase tracking-widest hover:bg-stone-50 transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Intro */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">Welcome to Honnavar</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 leading-relaxed">
            {SITE_CONTENT.about.philosophy}
          </h2>
          <p className="text-stone-600 leading-relaxed text-lg max-w-2xl mx-auto">
            {SITE_CONTENT.about.editorial}
          </p>
        </div>
      </section>
      
      {/* Gallery Highlight */}
      <section className="py-12 px-6">
        <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/5] bg-stone-100 flex items-center justify-center text-stone-300 italic text-sm">
              [Visual: Coastal Honnavar Heritage {i}]
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
