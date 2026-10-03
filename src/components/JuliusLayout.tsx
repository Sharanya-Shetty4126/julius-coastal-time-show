import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/julius-logo.png";
import { Button } from "@/components/ui/button";

const links = [["HOME","/"],["ABOUT","/about"],["MENU","/menu"],["WINE & BAR","/wine-bar"],["GALLERY","/gallery"],["VISIT","/visit"],["GUEST NOTES","/guest-notes"],["CONTACT","/contact"]] as const;

export function JuliusLayout({children}:{children:ReactNode}) {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const path=useRouterState({select:s=>s.location.pathname});
  useEffect(()=>setOpen(false),[path]);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>40);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);
  return <div className="min-h-screen bg-background text-foreground">
    {/* No border, no box: the bar is just a soft fade so the hero image flows underneath it */}
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${open?"bg-background":scrolled?"bg-gradient-to-b from-background via-background/70 to-transparent":"bg-gradient-to-b from-black/45 to-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="JULIUS home"><img src={logo} alt="" className="h-16 w-16 object-contain"/></Link>
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">{links.map(([label,to])=><Link key={to} to={to} className={`nav-link ${path===to?"nav-active":""}`}>{label}</Link>)}</nav>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<Menu/>}</Button>
      </div>
      {open&&<nav className="grid px-5 pb-6 pt-2 xl:hidden" aria-label="Mobile navigation">{links.map(([label,to],i)=><Link key={to} to={to} className="flex items-center justify-between py-3.5 font-display text-2xl text-foreground/90 transition-colors hover:text-primary"><span><span className="mr-4 font-mono text-xs text-primary">{String(i+1).padStart(2,"0")}</span>{label}</span><ArrowRight className="size-4 text-primary"/></Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-gradient-to-b from-background to-deep px-5 pb-14 pt-20 md:px-10"><div className="mx-auto grid max-w-screen-2xl gap-12 md:grid-cols-[1.5fr_1fr_1fr]"><div><p className="font-display text-5xl tracking-wide">JULIUS</p><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">Coastal food, warm tables and evenings shaped by the Arabian Sea.</p></div><div><p className="eyebrow">Find us</p><p className="mt-4 text-sm text-muted-foreground">Honnavar · Coastal Karnataka</p></div><div><p className="eyebrow">Created with care</p><a href="mailto:sharanya4126@gmail.com" className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-primary">Website idea by Sharanya</a><p className="mt-1 text-xs text-muted-foreground">sharanya4126@gmail.com</p></div></div></footer>
  </div>;
}

export const PageHero=({eyebrow,title,intro,image}:{eyebrow:string;title:string;intro:string;image:string})=><section className="page-hero"><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover"/><div className="hero-shade"/><div className="relative z-10 mx-auto flex min-h-[72svh] max-w-screen-2xl flex-col justify-end px-5 pb-14 pt-40 md:px-10 md:pb-20"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-5xl font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.88]">{title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-foreground/80 md:text-lg">{intro}</p></div></section>;

export const Meta=({title,description}:{title:string;description:string})=>[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}];