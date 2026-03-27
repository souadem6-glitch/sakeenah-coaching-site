"use client";
import Link from "next/link";


export default function Voorwaarden() {
  return (
    <main style={{fontFamily:"Georgia,serif",color:"#2C2420",minHeight:"100vh",background:"#FAF8F6"}}>
      <style>{`
        .sk-nav { background:#ffffff; padding:6px 60px; display:flex; justify-content:space-between; align-items:center; }
        .sk-nav-links { display:flex; gap:36px; }
        .sk-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:8px; }
        .sk-hamburger span { display:block; width:24px; height:1.5px; background:#8B6C59; }
        .sk-mobile-menu { display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:#fff; z-index:100; flex-direction:column; justify-content:center; align-items:center; gap:36px; }
        .sk-mobile-menu.open { display:flex; }
        .sk-mobile-close { position:absolute; top:20px; right:24px; background:none; border:none; font-size:28px; color:#8B6C59; cursor:pointer; }
        .sk-section { padding:80px 60px; max-width:800px; margin:0 auto; }
        .sk-footer-links { display:flex; justify-content:center; align-items:center; gap:0; margin-bottom:16px; }
        .sk-footer-pages { display:flex; justify-content:center; align-items:center; gap:0; margin-bottom:16px; flex-wrap:wrap; }
        @media (max-width: 768px) {
          .sk-nav { padding:10px 24px; }
          .sk-nav-links { display:none; }
          .sk-hamburger { display:flex; }
          .sk-mobile-menu a { color:#8B6C59; font-size:16px; letter-spacing:2px; text-transform:uppercase; text-decoration:none; font-family:sans-serif; }
          .sk-section { padding:60px 24px; }
          .sk-footer-links, .sk-footer-pages { flex-wrap:wrap; gap:12px; }
          .sk-footer-links a, .sk-footer-pages a { width:auto !important; }
          footer { padding:32px 24px !important; }
        }
      `}</style>

      <div className="sk-mobile-menu" id="sk-mobile-menu-vw">
        <button className="sk-mobile-close" onClick={()=>document.getElementById('sk-mobile-menu-vw')?.classList.remove('open')}>✕</button>
        <a href="/#over">Over mij</a>
        <a href="/#diensten">Diensten</a>
        <a href="/#boeken">Afspraak</a>
        <a href="/#contact">Contact</a>
      </div>

      <nav className="sk-nav">
        <Link href="/"><img src="/Logo-kleur-breed.png" alt="Sakeenah Coaching" width="186" height="62" style={{objectFit:"contain"}} /></Link>
        <div className="sk-nav-links">
          <Link href="/#over" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Over mij</Link>
          <Link href="/#diensten" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Diensten</Link>
          <Link href="/#boeken" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Afspraak</Link>
          <Link href="/#contact" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Contact</Link>
        </div>
        <button className="sk-hamburger" onClick={()=>document.getElementById('sk-mobile-menu-vw')?.classList.add('open')} aria-label="Menu openen">
          <span/><span/><span/>
        </button>
      </nav>

      <section className="sk-section">
        <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#B5A49A",fontFamily:"sans-serif",marginBottom:"16px"}}>Transparantie en duidelijkheid</div>
        <h1 style={{fontSize:"36px",color:"#2C2420",fontWeight:"normal",marginBottom:"60px"}}>Algemene voorwaarden</h1>
        <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
          {[
            { titel:"Toepassingsgebied", tekst:"Deze algemene voorwaarden zijn van toepassing op alle begeleidingstrajecten en sessies aangeboden door Sakeenah Coaching, gevestigd in Antwerpen." },
            { titel:"Afspraken en boekingen", tekst:"Afspraken worden uitsluitend gemaakt via de online boekingstool op de website. Na boeking ontvang je een bevestiging. De boeking is pas definitief na ontvangst van deze bevestiging." },
            { titel:"Annulering en verplaatsing", tekst:"Annuleren of verplaatsen kan uitsluitend tot 72 uur voor de geplande sessie. Bij annulering of verplaatsing binnen de 72 uur wordt de volledige sessie aangerekend via factuur. Sakeenah Coaching behoudt het recht om een sessie te verplaatsen bij overmacht." },
            { titel:"Betaling", tekst:"Betaling gebeurt na elke sessie, cash of via QR-code (Payconiq of Bancontact). Bij laattijdige annulering wordt een factuur opgemaakt die binnen 14 dagen betaald dient te worden." },
            { titel:"Tarieven", tekst:"Een sessie duurt 60 minuten en bedraagt 60 euro. Tarieven kunnen worden herzien. Wijzigingen worden vooraf gecommuniceerd aan lopende cliënten." },
            { titel:"Vertrouwelijkheid", tekst:"Alles wat besproken wordt tijdens sessies is strikt vertrouwelijk. Sakeenah Coaching deelt geen informatie over cliënten met derden, tenzij wettelijk verplicht." },
            { titel:"Aansprakelijkheid", tekst:"Sakeenah Coaching is niet aansprakelijk voor beslissingen die de cliënt neemt op basis van de begeleiding. Coaching is geen vervanging voor medische of psychologische behandeling." },
            { titel:"Toepasselijk recht", tekst:"Deze voorwaarden vallen onder het Belgisch recht. Bij geschillen wordt in eerste instantie gezocht naar een minnelijke oplossing." },
          ].map((s, i) => (
            <div key={i} style={{borderBottom:"1px solid #EDE8E4",paddingBottom:"40px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px"}}>
                <span style={{fontSize:"10px",color:"#D3C9C2",fontFamily:"sans-serif",letterSpacing:"2px"}}>{String(i + 1).padStart(2, "0")}</span>
                <h2 style={{fontSize:"17px",color:"#D3C9C2",fontWeight:"normal",margin:0,fontFamily:"Georgia,serif"}}>{s.titel}</h2>
              </div>
              <p style={{fontSize:"15px",color:"#7a6a62",lineHeight:1.9,fontFamily:"sans-serif",fontWeight:300}}>{s.tekst}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{background:"#2C2420",padding:"32px 60px",textAlign:"center",fontSize:"12px",color:"#9e8e84",fontFamily:"sans-serif"}}>
        <div className="sk-footer-links">
          <a href="https://www.instagram.com/sakeenah.coaching/" target="_blank" style={{color:"#8B6C59",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",width:"40px"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#8B6C59"/></svg>
          </a>
          <span style={{color:"#B5A49A",width:"12px",textAlign:"center"}}>|</span>
          <a href="https://www.facebook.com/profile.php?id=61587201634861" target="_blank" style={{color:"#8B6C59",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",width:"40px"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <span style={{color:"#B5A49A",width:"12px",textAlign:"center"}}>|</span>
          <a href="mailto:info@sakeenah-coaching.be" style={{color:"#8B6C59",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",width:"40px"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          </a>
          <span style={{color:"#B5A49A",width:"12px",textAlign:"center"}}>|</span>
          <a href="tel:+32491480823" style={{color:"#8B6C59",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",width:"40px"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <span style={{color:"#B5A49A",width:"12px",textAlign:"center"}}>|</span>
          <a href="https://wa.me/32491480823" target="_blank" style={{color:"#8B6C59",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",width:"40px"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B6C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
        <div style={{width:"100%",height:"1px",background:"#5a4a42",marginBottom:"16px"}}></div>
        <div className="sk-footer-pages">
          <a href="/faq" style={{color:"#8B6C59",textDecoration:"none",fontSize:"12px",fontFamily:"sans-serif",fontWeight:400,width:"auto",padding:"0 12px",textAlign:"center"}}>FAQ</a>
          <span style={{color:"#B5A49A",width:"12px",textAlign:"center"}}>|</span>
          <a href="/privacy" style={{color:"#8B6C59",textDecoration:"none",fontSize:"12px",fontFamily:"sans-serif",fontWeight:400,width:"auto",padding:"0 12px",textAlign:"center"}}>Privacy</a>
          <span style={{color:"#B5A49A",width:"12px",textAlign:"center"}}>|</span>
          <a href="/voorwaarden" style={{color:"#8B6C59",textDecoration:"none",fontSize:"12px",fontFamily:"sans-serif",fontWeight:400,width:"auto",padding:"0 12px",textAlign:"center"}}>Algemene voorwaarden</a>
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