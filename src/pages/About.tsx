import { useEffect } from "react";
import { TeamSection } from "../components/TeamSection";
import { WhyUsSection } from "../components/WhyUsSection";
import { salon } from "../content";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO / INTRO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-[var(--surface)] border-b border-[var(--line)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-light)] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <p className="text-[10px] md:text-xs uppercase tracking-[.3em] font-bold text-[var(--accent)] mb-6 animate-fade-in">
            La nostra storia
          </p>
          <h1 className="text-4xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 animate-fade-in-up">
            Passione per la bellezza, <br />
            <span className="italic text-[var(--accent)] font-normal">tramandata</span> nel tempo.
          </h1>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed font-light max-w-2xl mx-auto animate-fade-in-up delay-100">
            Da anni {salon.name} è il punto di riferimento a {salon.city} per chi cerca non solo un taglio, ma un'esperienza di stile autentica e personalizzata.
          </p>
        </div>
      </section>

      {/* STORY TEXT */}
      <section className="py-20 md:py-32 px-4 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 border border-[var(--line)]">
             <img 
               src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1200" 
               alt="Salone interni" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[var(--surface)] rounded-full border border-[var(--line)] flex items-center justify-center p-8 text-center shadow-xl hidden md:flex">
             <span className="font-serif italic text-lg leading-tight">"La bellezza è l'accordo tra il contenuto e la forma."</span>
          </div>
        </div>
        
        <div className="space-y-8">
           <h2 className="text-3xl md:text-5xl font-serif leading-tight">
             Un salone dove <br/>
             <span className="text-[var(--accent)] italic">tu</span> sei al centro.
           </h2>
           <div className="space-y-6 text-lg font-light opacity-80 leading-relaxed">
             <p>
               Crediamo che ogni cliente abbia una storia unica da raccontare attraverso il proprio stile. Il nostro approccio combina la tradizione artigianale della parrucchieria italiana con le tecniche più innovative del momento.
             </p>
             <p>
               Utilizziamo solo prodotti di alta qualità che rispettano la salute del capello e della cute, perché la bellezza nasce innanzitutto dal benessere.
             </p>
             <p>
               Il nostro team è in costante aggiornamento per offrirti le ultime tendenze in fatto di taglio, colore e styling, sempre adattandole alla tua fisionomia e personalità.
             </p>
           </div>
        </div>
      </section>

      {/* VALUES */}
      <div className="bg-[var(--surface)] border-y border-[var(--line)]">
        <WhyUsSection />
      </div>

      {/* TEAM */}
      <TeamSection />

    </>
  );
};
