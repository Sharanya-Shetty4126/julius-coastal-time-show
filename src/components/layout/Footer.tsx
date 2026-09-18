import { SITE_CONTENT } from "../../lib/content";

export const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-2xl font-serif mb-4">{SITE_CONTENT.brand.name}</h2>
          <p className="text-stone-600 max-w-xs italic">{SITE_CONTENT.brand.tagline}</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-4">Location</h3>
          <p className="text-stone-600 text-sm whitespace-pre-line">{SITE_CONTENT.contact.address}</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-4">Hours</h3>
          <div className="text-stone-600 text-sm space-y-1">
            <p>Lunch: {SITE_CONTENT.contact.hours.lunch}</p>
            <p>Dinner: {SITE_CONTENT.contact.hours.dinner}</p>
            <p>Closed: {SITE_CONTENT.contact.hours.closed}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 flex flex-col md:row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-stone-400">
        <p>&copy; {new Date().getFullYear()} {SITE_CONTENT.brand.name} Honnavar. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-stone-600">Instagram</a>
          <a href="#" className="hover:text-stone-600">Facebook</a>
        </div>
      </div>
    </footer>
  );
};
