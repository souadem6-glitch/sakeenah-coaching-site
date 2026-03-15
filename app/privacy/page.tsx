import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | Sakeenah Coaching Antwerpen",
  description: "Privacybeleid van Sakeenah Coaching. Hoe wij omgaan met jouw persoonsgegevens.",
};

export default function Privacy() {
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

      <div className="sk-mobile-menu" id="sk-mobile-menu-privacy">
        <button className="sk-mobile-close" onClick={()=>document.getElementById('sk-mobile-menu-privacy')?.classList.remove('open')}>✕</button>
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
        <button className="sk-hamburger" onClick={()=>document.getElementById('sk-mobile-menu-privacy')?.classList.add('open')} aria-label="Menu openen">
          <span/><span/><span/>
        </button>
      </nav>

      <section className="sk-section">
        <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#B5A49A",fontFamily:"sans-serif",marginBottom:"16px"}}>Jouw gegevens zijn veilig</div>
        <h1 style={{fontSize:"36px",color:"#2C2420",fontWeight:"normal",marginBottom:"60px"}}>Privacybeleid</h1>
        <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
          {[
            { titel:"Wie zijn wij", tekst:"Sakeenah Coaching is een eenmanszaak gevestigd in Antwerpen. Wij zijn verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals beschreven in dit privacybeleid." },
            { titel:"Welke gegevens verzamelen wij", tekst:"Wij verzamelen enkel de gegevens die noodzakelijk zijn voor de begeleiding, zoals naam, e-mailadres en informatie die je zelf deelt tijdens sessies. Via het contactformulier op de website worden naam, e-mailadres en bericht bijgehouden." },
            { titel:"Waarvoor gebruiken wij jouw gegevens", tekst:"Jouw gegevens worden uitsluitend gebruikt voor het plannen en opvolgen van sessies, en voor communicatie in het kader van de begeleiding. Wij delen jouw gegevens nooit met derden." },
            { titel:"Hoe lang bewaren wij jouw gegevens", tekst:"Persoonsgegevens worden bewaard zolang als noodzakelijk voor de begeleiding en worden daarna verwijderd. Wij bewaren geen gegevens langer dan wettelijk vereist." },
            { titel:"Jouw rechten", tekst:"Je hebt het recht om jouw gegevens in te zien, te corrigeren of te laten verwijderen. Je kan hiervoor contact opnemen via het contactformulier op de website." },
            { titel:"Cookies", tekst:"Deze website maakt geen gebruik van tracking cookies of analysesoftware van derden." },
            { titel:"Wijzigingen", tekst:"Wij behouden het recht om dit privacybeleid te wijzigen. De meest recente versie is steeds beschikbaar op deze pagina." },
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