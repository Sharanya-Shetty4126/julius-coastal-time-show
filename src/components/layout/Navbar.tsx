import { Link } from "@tanstack/react-router";
import { SITE_CONTENT } from "../../lib/content";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-tighter text-stone-900">
          {SITE_CONTENT.brand.name}
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-stone-600">
          <Link to="/about" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-medium">About</Link>
          <Link to="/menu" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-medium">Menu</Link>
          <Link to="/wine-bar" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-medium">Wine & Bar</Link>
          <Link to="/gallery" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-medium">Gallery</Link>
          <Link to="/visit" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-medium">Visit</Link>
          <Link to="/contact" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-medium">Contact</Link>
        </div>
        <Link 
          to="/contact"
          className="bg-stone-900 text-stone-50 px-6 py-2 text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors"
        >
          Reservations
        </Link>
      </div>
    </nav>
  );
};
