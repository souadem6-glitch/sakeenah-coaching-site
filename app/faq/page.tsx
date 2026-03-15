import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Sakeenah Coaching Antwerpen",
  description: "Veelgestelde vragen over coaching bij Sakeenah Coaching. Alles over sessies, tarieven, annulering en online begeleiding in Antwerpen.",
};

export default function FAQ() {
  const vragen = [
    {
      vraag: "Hoe werkt een eerste sessie?",
      antwoord: "Een eerste sessie is een kennismaking. We bespreken jouw situatie, wat je bezighoudt en wat je hoopt te bereiken. Zo kunnen we samen bekijken of een traject bij jou past."
    },
    {
      vraag: "Hoe maak ik een afspraak?",
      antwoord: "Afspraken maak je uitsluitend via de online boekingstool op deze website. Je kiest zelf een moment dat jou past."
    },
    {
      vraag: "Kan ik een afspraak annuleren of verplaatsen?",
      antwoord: "Verplaatsen of annuleren kan tot 72 uur voor de geplande sessie. Gebeurt dit later, dan wordt de sessie volledig aangerekend via factuur."
    },
    {
      vraag: "Zijn sessies online of fysiek?",
      antwoord: "Beide zijn mogelijk. De praktijk is gevestigd in Antwerpen. Online sessies gaan door via een videoplatform naar keuze."
    },
    {
      vraag: "Wordt begeleiding terugbetaald door de ziekenkas?",
      antwoord: "Nee, begeleiding via Sakeenah Coaching wordt niet terugbetaald door de ziekenkas."
    },
    {
      vraag: "Voor wie is coaching geschikt?",
      antwoord: "Ik begeleid vrouwen, kinderen en jongeren die ergens tegenaan lopen in het leven. Of het nu gaat om dagelijkse uitdagingen, persoonlijke groei of vragen rond neurodiversiteit, wie bewust aan zichzelf wil werken is welkom."
    },
    {
      vraag: "Hoe lang duurt een traject?",
      antwoord: "Een traject bestaat uit minimaal 8 sessies en wordt in de meeste gevallen verlengd, afhankelijk van jouw noden en vooruitgang."
    },
    {
      vraag: "Hoe wordt betaald?",
      antwoord: "Betaling gebeurt cash of via QR-code (Payconiq/Bancontact) na elke sessie."
    },
  ];

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
        .sk-footer-pages { display:flex; justify-content:center; align-items:center; gap:0; margin-bottom:16px; }
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

      <div className="sk-mobile-menu" id="sk-mobile-menu-faq">
        <button className="sk-mobile-close" onClick={()=>document.getElementById('sk-mobile-menu-faq')?.classList.remove('open')}>✕</button>
        <a href="/#over" onClick={()=>document.getElementById('sk-mobile-menu-faq')?.classList.remove('open')}>Over mij</a>
        <a href="/#diensten" onClick={()=>document.getElementById('sk-mobile-menu-faq')?.classList.remove('open')}>Diensten</a>
        <a href="/#boeken" onClick={()=>document.getElementById('sk-mobile-menu-faq')?.classList.remove('open')}>Afspraak</a>
        <a href="/#contact" onClick={()=>document.getElementById('sk-mobile-menu-faq')?.classList.remove('open')}>Contact</a>
      </div>

      <nav className="sk-nav">
        <Link href="/"><img src="/Logo-kleur-breed.png" alt="Sakeenah Coaching" width="186" height="62" style={{objectFit:"contain"}} /></Link>
        <div className="sk-nav-links">
          <Link href="/#over" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Over mij</Link>
          <Link href="/#diensten" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Diensten</Link>
          <Link href="/#boeken" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Afspraak</Link>
          <Link href="/#contact" style={{color:"#8B6C59",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",fontFamily:"sans-serif"}}>Contact</Link>
        </div>
        <button className="sk-hamburger" onClick={()=>document.getElementById('sk-mobile-menu-faq')?.classList.add('open')} aria-label="Menu openen">
          <span/><span/><span/>
        </button>
      </nav>

      <section className="sk-section">
        <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#B5A49A",fontFamily:"sans-serif",marginBottom:"16px"}}>Veelgestelde vragen</div>
        <h1 style={{fontSize:"36px",color:"#2C2420",fontWeight:"normal",marginBottom:"60px"}}>FAQ</h1>
        <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
          {vragen.map((v, i) => (
            <div key={i} style={{borderBottom:"1px solid #EDE8E4",paddingBottom:"40px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px"}}>
                <span style={{fontSize:"10px",color:"#D3C9C2",fontFamily:"sans-serif",letterSpacing:"2px"}}>{String(i + 1).padStart(2, "0")}</span>
                <h2 style={{fontSize:"17px",color:"#D3C9C2",fontWeight:"normal",margin:0,fontFamily:"Georgia,serif"}}>{v.vraag}</h2>
              </div>
              <p style={{fontSize:"15px",color:"#7a6a62",lineHeight:1.9,fontFamily:"sans-serif",fontWeight:300}}>{v.antwoord}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{background:"#2C2420",padding:"40px 60px",textAlign:"center",fontFamily:"sans-serif"}}>
        <div className="sk-footer-links">
          <a href="https://www.instagram.com/sakeenah.coaching/" target="_blank" style={{color:"#D3C9C2",textDecoration:"none",fontSize:"12px",letterSpacing:"1px",display:"flex",alignItems:"center",gap:"6px",width:"160px",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D3C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#D3C9C2"/></svg>
            Instagram
          </a>
          <span style={{color:"#5a4a42",width:"20px",textAlign:"center"}}>|</span>
          <a href="https://www.facebook.com/profile.php?id=61587201634861" target="_blank" style={{color:"#D3C9C2",textDecoration:"none",fontSize:"12px",letterSpacing:"1px",display:"flex",alignItems:"center",gap:"6px",width:"160px",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D3C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Facebook
          </a>
          <span style={{color:"#5a4a42",width:"20px",textAlign:"center"}}>|</span>
          <a href="https://wa.me/32494808023" target="_blank" style={{color:"#D3C9C2",textDecoration:"none",fontSize:"12px",letterSpacing:"1px",display:"flex",alignItems:"center",gap:"6px",width:"160px",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D3C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            WhatsApp
          </a>
        </div>
        <div style={{width:"100%",height:"1px",background:"#5a4a42",marginBottom:"16px"}}></div>
        <div className="sk-footer-pages">
          <a href="/faq" style={{color:"#9e8e84",textDecoration:"none",fontSize:"11px",letterSpacing:"1px",width:"160px",textAlign:"center"}}>FAQ</a>
          <span style={{color:"#5a4a42",width:"20px",textAlign:"center"}}>|</span>
          <a href="/privacy" style={{color:"#9e8e84",textDecoration:"none",fontSize:"11px",letterSpacing:"1px",width:"160px",textAlign:"center"}}>Privacy</a>
          <span style={{color:"#5a4a42",width:"20px",textAlign:"center"}}>|</span>
          <a href="/voorwaarden" style={{color:"#9e8e84",textDecoration:"none",fontSize:"11px",letterSpacing:"1px",width:"160px",textAlign:"center"}}>Algemene voorwaarden</a>
        </div>
        <div style={{fontSize:"11px",color:"#5a4a42",letterSpacing:"1px"}}>© 2026 Sakeenah Coaching</div>
      </footer>
    </main>
  );
}