import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { JuliusLayout, Meta } from "@/components/JuliusLayout";
import { Button } from "@/components/ui/button";
import morning from "@/assets/julius-coast-morning.jpg"; import day from "@/assets/julius-coast-day.jpg"; import sunset from "@/assets/julius-coast-sunset.jpg"; import night from "@/assets/julius-coast-night.jpg";
import dining from "@/assets/julius-dining.jpg"; import seafood from "@/assets/julius-seafood.jpg"; import bar from "@/assets/julius-bar.jpg";

export const Route = createFileRoute("/")({
  head:()=>({meta:Meta({title:"JULIUS | Coastal Seafood & Bar in Honnavar",description:"Coastal seafood, wine and warm hospitality by the Arabian Sea in Honnavar."})}),
  component: Index,
});

function Index() {
  const [period,setPeriod]=useState("night");
  useEffect(()=>{const h=new Date().getHours();setPeriod(h>=5&&h<11?"morning":h<17?"day":h<20?"evening":"night")},[]);
  const scenes={morning:{image:morning,label:"Morning on the coast",line:"Soft light. Quiet tides. A table waiting."},day:{image:day,label:"Afternoon by the sea",line:"Bright water. Coastal plates. An unhurried afternoon."},evening:{image:sunset,label:"Golden hour in Honnavar",line:"Amber skies. Warm tables. The evening begins."},night:{image:night,label:"Tonight by the Arabian Sea",line:"Moonlit water. Wine poured slowly. Stay awhile."}};
  const scene=scenes[period as keyof typeof scenes];
  const tiles=[["/menu",seafood,"01","From the coast"],["/wine-bar",bar,"02","After the light changes"],["/about",dining,"03","Made for gathering"]] as const;
  return <JuliusLayout><section className="home-hero"><img src={scene.image} alt="Honnavar coast" className="atmosphere-image"/><div className="hero-shade"/><div className="wave-line"/><div className="relative z-10 mx-auto flex min-h-[90svh] max-w-screen-2xl flex-col justify-end px-5 pb-14 pt-36 md:px-10 md:pb-20"><p className="eyebrow">{scene.label}</p><h1 className="mt-5 font-display text-[clamp(4.5rem,13vw,12rem)] leading-[.72]">JULIUS</h1><div className="mt-8 grid items-end gap-8 border-t border-foreground/25 pt-6 md:grid-cols-2"><p className="max-w-xl font-display text-3xl leading-tight md:text-5xl">{scene.line}</p><div className="flex flex-wrap gap-3 md:justify-end"><Button asChild size="lg"><Link to="/about">Discover JULIUS <ArrowRight/></Link></Button><Button asChild size="lg" variant="outline"><Link to="/menu">Explore menu</Link></Button></div></div></div></section><section className="section-grid bg-sand text-ink"><p className="eyebrow text-wine">Honnavar · Karnataka</p><div><h2 className="section-title">A coastal evening,<br/><em>held at the table.</em></h2><p className="body-copy mt-8">JULIUS brings seafood, wine and generous hospitality together in a place shaped by the coast. Come for lunch beneath bright skies. Stay for the amber hour and the glow after dark.</p></div></section><section className="editorial-triptych">{tiles.map(([to,img,n,title])=><Link to={to} key={to} className="feature-tile group"><img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"/><div className="feature-shade"/><span className="absolute left-6 top-6 font-mono text-xs text-primary">{n}</span><h2 className="absolute bottom-7 left-6 font-display text-4xl md:text-5xl">{title}</h2></Link>)}</section></JuliusLayout>;
}
