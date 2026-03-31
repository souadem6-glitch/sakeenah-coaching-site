"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [verzonden, setVerzonden] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (this: any) {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || ([] as any[]);
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || ([] as any[]);
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const w = window as any;
    w.Cal("init", "coachingsessie", { origin: "https://app.cal.com" });
    w.Cal.ns.coachingsessie("inline", {
      elementOrSelector: "#my-cal-inline-coachingsessie",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "sakeenah-coaching-coachingsessie/coachingsessie",
    });
    w.Cal.ns.coachingsessie("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#8B6C59" },
        dark: { "cal-brand": "#D3C9C2" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <main style={{fontFamily:"Georgia,serif",color:"#2C2420"}}>
      <style>{`
        .sk-nav { background:#ffffff; padding:6px 60px; display:flex; justify-content:space-between; align-items:center; }
        .sk-nav-links { display:flex; gap:36px; }
        .sk-hero { background:#FAF8F6; padding:100px 0; }
        .sk-hero-inner { max-width:1000px; margin:0 auto; padding:0 60px; display:flex; align-items:center; gap:80px; }
        .sk-hero-img { width:420px; height:320px; flex-shrink:0; overflow:hidden; }
        .sk-over-inner { max-width:1000px; margin:0 auto; padding:0 60px; display:flex; gap:80px; align-items:flex-start; }
        .sk-over-label { flex:0 0 200px; }
        .sk-diensten-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .sk-boeken-inner { max-width:1000px; margin:0 auto; padding:0 60px; text-align:center; }
        .sk-contact-inner { max-width:1000px; margin:0 auto; padding:0 60px; display:flex; gap:80px; }
        .sk-contact-left { flex:0 0 280px; }
        .sk-cal-wrap { width:100%; min-height:660px; margin-top:32px; }
        #my-cal-inline-coachingsessie { width:100%; height:660px; }
        .sk-footer-links { display:flex; justify-content:center; align-items:center; gap:0px; margin-bottom:16px; }
        .sk-footer-link { color:#8B6C59; text-decoration:none; font-family:sans-serif; font-size:12px; letter-spacing:1px; display:flex; align-items:center; gap:6px; width:40px; justify-content:center; }
        .sk-footer-pages { display:flex; justify-content:center; align-items:center; gap:0px; margin-bottom:16px; flex-wrap:wrap; }
        .sk-footer-page { color:#8B6C59; text-decoration:none; font-size:12px; font-family:sans-serif; width:auto; padding:0 12px; text-align:center; }
        .sk-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:8px; }
        .sk-hamburger span { display:block; width:24px; height:1.5px; background:#8B6C59; }
        .sk-mobile-menu { display:none; }

        @media (max-width: 768px) {
          .sk-nav { padding:10px 24px; }
          .sk-nav-links { display:none; }
          .sk-hamburger { display:flex; }
          .sk-mobile-menu { display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:#fff; z-index:100; flex-direction:column; justify-content:center; align-items:center; gap:36px; }
          .sk-mobile-menu.open { display:flex; }
          .sk-mobile-menu a { color:#8B6C59; font-size:16px; letter-spacing:2px; text-transform:uppercase; text-decoration:none; font-family:sans-serif; }
          .sk-mobile-close { position:absolute; top:20px; right:24px; background:none; border:none; font-size:28px; color:#8B6C59; cursor:pointer; }

          .sk-hero { padding:60px 0; }
          .sk-hero-inner { flex-direction:column; gap:40px; padding:0 24px; }
          .sk-hero-img { width:100%; height:240px; }

          .sk-over-inner { flex-direction:column; gap:24px; padding:0 24px; }
          .sk-over-label { flex:none; }

          .sk-diensten-grid { grid-template-columns:1fr; }
          section#diensten > div { padding:0 24px; }
          section#boeken > div { padding:0 24px; }

          .sk-boeken-inner { padding:0 24px; }
          #my-cal-inline-coachingsessie { height:700px; }

          .sk-contact-inner { flex-direction:column; gap:40px; padding:0 24px; }
          .sk-contact-left { flex:none; }

          .sk-footer-links { flex-wrap:wrap; gap:12px; }
          .sk-footer-link { width:auto; }
          .sk-footer-pages { flex-wrap:wrap; gap:8px; }
          .sk-footer-page { width:auto; }
          footer { padding:32px 24px !important; }
        }
      `}</style>

      {/* Mobile menu */}
      <div className="sk-mobile-menu" id="sk-mobile-menu">
        <button className="sk-mobile-close" onClick={()=>document.getElementById('sk-mobile-menu')?.classList.remove('open')}>✕</button>
        <a href="#over" onClick={()=>document.getElementById('sk-mobile-menu')?.classList.remove('open')}>Over mij</a>
        <a href="#diensten" onClick={()=>document.getElementById('sk-mobile-menu')?.classList.remove('open')}>Diensten</a>
        <a href="#boeken" onClick={()=>document.getElementById('sk-mobile-menu')?.classList.remove('open')}>Afspraak</a>
        <a href="#contact" onClick={()=>document.getElementById('sk-mobile-menu')?.classList.remove('open')}>Contact</a>
      </div>

      <nav className="sk-nav">
        <a href="/"><Image src="/Logo-kleur-breed.png" alt="Sakeenah Coaching" width={186} height={62} style={{objectFit:"contain"}} /></a>
        <div className="sk-nav-links">
          <a href="#over" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Over mij</a>
          <a href="#diensten" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Diensten</a>
          <a href="#boeken" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Afspraak</a>
          <a href="#contact" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Contact</a>
        </div>
        <button className="sk-hamburger" onClick={()=>document.getElementById('sk-mobile-menu')?.classList.add('open')} aria-label="Menu openen">
          <span/><span/><span/>
        </button>
      </nav>

      <section className="sk-hero">
        <div className="sk-hero-inner">
          <div style={{flex:1}}>
            <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#B5A49A",fontFamily:"sans-serif",marginBottom:"24px"}}>Gezins en life coaching</div>
            <h1 style={{fontSize:"38px",color:"#D3C9C2",lineHeight:1.2,marginBottom:"24px",fontWeight:"normal",fontStyle:"italic"}}>Een warme plek om<br/><em style={{color:"#D3C9C2"}}>tot rust te komen</em></h1>
            <p style={{fontSize:"15px",color:"#8B6C59",lineHeight:1.9,maxWidth:"420px",marginBottom:"40px",fontFamily:"sans-serif",fontWeight:300,textAlign:"justify"}}>Vanuit rust en oprechte betrokkenheid begeleid ik gezinnen en individuen met hoogbegaafdheid, ADHD en autisme. Individueel, samen of online, altijd op jouw tempo.</p>
            <a href="#boeken" style={{display:"inline-block",background:"transparent",color:"#8B6C59",padding:"13px 32px",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif",border:"1px solid #D3C9C2"}}>Maak een afspraak</a>
          </div>
          <div className="sk-hero-img">
            <img src="/sakeenah-praktijk (1).jpg" alt="Praktijkruimte Sakeenah Coaching" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} />
          </div>
        </div>
      </section>

      <section id="over" style={{background:"#fff",padding:"80px 0"}}>
        <div className="sk-over-inner">
          <div className="sk-over-label">
            <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#B5A49A",fontFamily:"sans-serif"}}>Wie ben ik</div>
          </div>
          <div style={{flex:1}}>
            <h2 style={{fontSize:"28px",color:"#8B6C59",fontWeight:"normal",marginBottom:"20px"}}>Over mij</h2>
            <p style={{fontSize:"15px",color:"#7a6a62",lineHeight:1.9,fontFamily:"sans-serif",fontWeight:300,textAlign:"justify"}}>Coaching is voor mij geen vak, het is een roeping. Vanuit een oprechte gedrevenheid om mensen te begeleiden die vastlopen of geen uitweg meer zien, koos ik bewust voor dit pad. Mijn aanpak is geworteld in de waarden van de islam. De Quran en Soennah vormen mijn leidraad, zowel in mijn persoonlijk leven als in mijn praktijk. Die basis geeft mijn begeleiding richting, rust en diepgang.</p>
            <p style={{fontSize:"15px",color:"#7a6a62",lineHeight:1.9,fontFamily:"sans-serif",fontWeight:300,textAlign:"justify",marginTop:"16px"}}>Jarenlang zocht ik zelf naar antwoorden, tot ik ontdekte dat ik hoogbegaafd ben en ADHD en autisme heb. Die weg heeft mij gevormd en een sterk inlevingsvermogen en scherp analytisch inzicht bijgebracht. Vanuit eigen ervaring én opleiding begrijp ik wat mijn cliënten doormaken, niet alleen met mijn hoofd, maar ook met mijn hart. Met empathie, rechtvaardigheid en heldere communicatie help ik mensen grip te krijgen op wat hen bezighoudt.</p>
          </div>
        </div>
      </section>

      <section id="diensten" style={{background:"#FAF8F6",padding:"80px 0"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto",padding:"0 60px"}}>
          <h2 style={{fontSize:"28px",color:"#8B6C59",fontWeight:"normal",marginBottom:"48px"}}>Begeleiding</h2>
          <div className="sk-diensten-grid">
            {[
              {num:"01",titel:"Voor wie",tekst:"Ik begeleid gezinnen en individuen die ergens tegenaan lopen in het leven. Of het nu gaat om dagelijkse uitdagingen, persoonlijke groei of vragen rond werk en identiteit, wie bewust aan zichzelf wil werken is welkom."},
              {num:"02",titel:"Specialisatie",tekst:"Hoogbegaafdheid, ADHD en autisme zijn voor mij vertrouwd terrein. Vanuit eigen ervaring en gerichte opleiding begeleid ik mensen met neurodiversiteit met kennis, begrip en oprechte betrokkenheid."},
              {num:"03",titel:"Praktisch",tekst:"Sessies duren 60 minuten en kosten € 60. Je kan terecht voor individuele begeleiding, gezinssessies of online sessies. Begeleiding wordt niet terugbetaald door de mutualiteit."},
            ].map((d)=>(
              <div key={d.num} style={{background:"#fff",padding:"32px 28px",border:"1px solid #EDE8E4"}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}}>
                  <span style={{fontSize:"10px",color:"#D3C9C2",fontFamily:"sans-serif",letterSpacing:"2px"}}>{d.num}</span>
                  <h3 style={{fontSize:"15px",color:"#D3C9C2",fontWeight:"normal",margin:0,fontFamily:"Georgia,serif"}}>{d.titel}</h3>
                </div>
                <p style={{fontSize:"12px",color:"#9e8e84",lineHeight:1.8,fontFamily:"sans-serif",fontWeight:300,textAlign:"justify"}}>{d.tekst}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:"40px",textAlign:"center"}}>
            <a href="/faq" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"2px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif",borderBottom:"1px solid #D3C9C2",paddingBottom:"4px"}}>Meer vragen? Bekijk de FAQ →</a>
          </div>
        </div>
      </section>

      <section id="boeken" style={{background:"#fff",padding:"80px 0"}}>
        <div className="sk-boeken-inner">
          <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#B5A49A",fontFamily:"sans-serif",marginBottom:"16px"}}>Plan je sessie</div>
          <h2 style={{fontSize:"28px",color:"#8B6C59",fontWeight:"normal",marginBottom:"16px"}}>Afspraak boeken</h2>
          <p style={{fontSize:"14px",color:"#7a6a62",fontFamily:"sans-serif",fontWeight:300,marginBottom:"10px"}}>Een sessie duurt 60 minuten en bedraagt 60 euro.</p>
          <p style={{fontSize:"14px",color:"#7a6a62",fontFamily:"sans-serif",fontWeight:300,marginBottom:"10px"}}>
            Annuleren kan niet binnen 72 uur voor het geplande tijdstip.<br />
            Bij te late annulering wordt de afspraak in rekening gebracht.
          </p>
          <div className="sk-cal-wrap">
            <div id="my-cal-inline-coachingsessie"></div>
          </div>
        </div>
      </section>

      <section id="contact" style={{background:"#2C2420",padding:"80px 0"}}>
        <div className="sk-contact-inner">
          <div className="sk-contact-left">
            <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#8B6C59",fontFamily:"sans-serif",marginBottom:"16px"}}>Schrijf me</div>
            <h2 style={{fontSize:"28px",color:"#D3C9C2",fontWeight:"normal",fontFamily:"Georgia,serif",marginBottom:"16px"}}>Neem contact op</h2>
            <p style={{fontSize:"13px",color:"#9e8e84",lineHeight:1.8,fontFamily:"sans-serif",fontWeight:300}}>Heb je een vraag of wil je kennismaken? Stuur een bericht en ik neem zo snel mogelijk contact op.</p>
          </div>
          {verzonden ? (
            <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:"16px"}}>
              <p style={{fontSize:"22px",color:"#D3C9C2",fontFamily:"Georgia,serif",fontWeight:"normal"}}>Bedankt voor je bericht!</p>
              <p style={{fontSize:"13px",color:"#9e8e84",fontFamily:"sans-serif",fontWeight:300,lineHeight:1.8}}>Ik neem zo snel mogelijk contact met je op.</p>
              <button onClick={()=>setVerzonden(false)} style={{alignSelf:"flex-start",background:"transparent",color:"#8B6C59",border:"1px solid #5a4a42",padding:"12px 28px",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",fontFamily:"sans-serif",cursor:"pointer"}}>Nieuw bericht</button>
            </div>
          ) : (
            <form onSubmit={async(e)=>{e.preventDefault();const f=e.target as HTMLFormElement;const data=new FormData(f);await fetch("https://formspree.io/f/mnjgbbzg",{method:"POST",body:data,headers:{"Accept":"application/json"}});setVerzonden(true);f.reset();}} style={{flex:1,display:"flex",flexDirection:"column",gap:"24px"}}>
              <input name="naam" placeholder="Jouw naam" style={{background:"transparent",border:"none",borderBottom:"1px solid #5a4a42",padding:"10px 0",color:"#D3C9C2",fontSize:"13px",fontFamily:"sans-serif",outline:"none",fontWeight:300,width:"100%"}} />
              <input name="email" type="email" placeholder="E-mailadres" style={{background:"transparent",border:"none",borderBottom:"1px solid #5a4a42",padding:"10px 0",color:"#D3C9C2",fontSize:"13px",fontFamily:"sans-serif",outline:"none",fontWeight:300,width:"100%"}} />
              <textarea name="bericht" placeholder="Jouw bericht" rows={4} style={{background:"transparent",border:"none",borderBottom:"1px solid #5a4a42",padding:"10px 0",color:"#D3C9C2",fontSize:"13px",fontFamily:"sans-serif",outline:"none",resize:"none",fontWeight:300,width:"100%"}} />
              <button type="submit" style={{alignSelf:"flex-start",background:"#8B6C59",color:"#fff",border:"none",padding:"14px 36px",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",fontFamily:"sans-serif",cursor:"pointer"}}>Verstuur</button>
            </form>
          )}
        </div>
      </section>

      <footer style={{background:"#FAF8F6",padding:"32px 60px",textAlign:"center",fontSize:"12px",color:"#B5A49A",fontFamily:"sans-serif"}}>
        <div className="sk-footer-links">
          <a href="https://www.instagram.com/sakeenah.coaching/" target="_blank" className="sk-footer-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#8B6C59"/></svg>
          </a>
          <span style={{color:"#D3C9C2",width:"12px",textAlign:"center"}}>|</span>
          <a href="https://www.facebook.com/profile.php?id=61587201634861" target="_blank" className="sk-footer-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <span style={{color:"#D3C9C2",width:"12px",textAlign:"center"}}>|</span>
          <a href="mailto:info@sakeenah-coaching.be" className="sk-footer-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          </a>
          <span style={{color:"#D3C9C2",width:"12px",textAlign:"center"}}>|</span>
          <a href="tel:+32491480823" className="sk-footer-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <span style={{color:"#D3C9C2",width:"12px",textAlign:"center"}}>|</span>
          <a href="https://wa.me/32491480823" target="_blank" className="sk-footer-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
        <div style={{width:"100%",height:"1px",background:"#D3C9C2",marginBottom:"16px"}}></div>
        <div className="sk-footer-pages">
          <a href="/faq" className="sk-footer-page">FAQ</a>
          <span style={{color:"#D3C9C2",width:"12px",textAlign:"center"}}>|</span>
          <a href="/privacy" className="sk-footer-page">Privacy</a>
          <span style={{color:"#D3C9C2",width:"12px",textAlign:"center"}}>|</span>
          <a href="/voorwaarden" className="sk-footer-page">Algemene voorwaarden</a>
        </div>
        © 2026 Sakeenah Coaching
      </footer>
      <button
        onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        style={{position:"fixed",bottom:"32px",right:"32px",background:"#8B6C59",color:"#fff",border:"none",width:"44px",height:"44px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 12px rgba(0,0,0,0.15)",zIndex:50}}
        aria-label="Naar boven"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </main>
  );
}