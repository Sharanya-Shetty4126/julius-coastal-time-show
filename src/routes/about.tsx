import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONTENT } from "../lib/content";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <span className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 block">Our Story</span>
      <h1 className="text-5xl font-serif text-stone-900 mb-12">{SITE_CONTENT.about.title}</h1>
      <div className="prose prose-stone lg:prose-xl">
        <p className="text-xl text-stone-800 leading-relaxed italic mb-8">
          {SITE_CONTENT.about.philosophy}
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          {SITE_CONTENT.about.editorial}
        </p>
        <div className="mt-16 aspect-video bg-stone-100 flex items-center justify-center text-stone-300 italic">
          [Visual: The confluence of Sharavati River and the Arabian Sea]
        </div>
      </div>
    </div>
  );
}
