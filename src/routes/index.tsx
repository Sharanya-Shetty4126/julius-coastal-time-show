import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { JuliusLayout, Meta } from "@/components/JuliusLayout";
import morning from "@/assets/julius-coast-morning.jpg"; import day from "@/assets/julius-coast-day.jpg"; import sunset from "@/assets/julius-coast-sunset.jpg"; import night from "@/assets/julius-coast-night.jpg";

export const Route = createFileRoute("/")({
  head:()=>({meta:Meta({title:"JULIUS | Coastal Seafood & Bar in Honnavar",description:"Coastal seafood, wine and warm hospitality by the Arabian Sea in Honnavar."})}),
  component: Index,
});

const scenes = {
  morning:{image:morning,label:"Morning on the coast",title:"Soft light at the table",line:"Coastal food, generous tables, and mornings held close to the Arabian Sea."},
  day:{image:day,label:"Afternoon by the sea",title:"Sunlight at the table",line:"Coastal food, generous tables, and afternoons held close to the Arabian Sea."},
  evening:{image:sunset,label:"Golden hour in Honnavar",title:"Amber light at the table",line:"Coastal food, generous tables, and evenings held close to the Arabian Sea."},
  night:{image:night,label:"Night on the coast",title:"Moonlight at the table",line:"Coastal food, generous tables, and evenings held close to the Arabian Sea."},
};
type Period = keyof typeof scenes;

/*
 * When each scene starts (24-hour clock, visitor's local time).
 * Change these numbers to move the switch times.
 *   morning  05:00 to 10:59
 *   day      11:00 to 15:59
 *   evening  16:00 to 18:59
 *   night    19:00 to 04:59
 */
const MORNING_FROM = 5;
const DAY_FROM = 11;
const EVENING_FROM = 16;
const NIGHT_FROM = 19;

const periodFromClock = (): Period => {
  const h = new Date().getHours();
  if (h >= MORNING_FROM && h < DAY_FROM) return "morning";
  if (h >= DAY_FROM && h < EVENING_FROM) return "day";
  if (h >= EVENING_FROM && h < NIGHT_FROM) return "evening";
  return "night";
};

const linkCls="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary";

function Index() {
  const [period,setPeriod]=useState<Period>("night");
  useEffect(()=>{
    const pick=()=>setPeriod(periodFromClock());
    pick();
    const id=setInterval(pick,60000);
    return ()=>clearInterval(id);
  },[]);
  const scene=scenes[period];
  return <JuliusLayout>
    <section className="home-hero">
      {/* key={period} replays the fade-in and slow zoom when the time of day changes */}
      <img key={period} src={scene.image} alt="Honnavar coast" className="atmosphere-image"/>
      <div className="hero-shade"/>
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-6 pb-16 pt-28 md:pl-[16vw] md:pr-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">{scene.label}</p>
        <h1 className="mt-6 font-display text-[clamp(4.5rem,14vw,13rem)] leading-[.85] tracking-[0.01em]">JULIUS</h1>
        <p className="mt-8 font-display text-4xl italic leading-tight md:text-6xl">{scene.title}</p>
        <p className="mt-5 max-w-xl text-base leading-7 text-foreground/90 md:text-lg">{scene.line}</p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <Link to="/menu" className={linkCls}>Explore the menu <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link>
          <Link to="/visit" className={linkCls}>Find us in Honnavar <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link>
        </div>
      </div>
      <p className="absolute bottom-10 right-8 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-foreground/70 md:block [writing-mode:vertical-rl]">The atmosphere follows your local time</p>
    </section>
  </JuliusLayout>;
}