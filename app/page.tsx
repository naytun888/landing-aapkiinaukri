"use client";

import CtaLink from "@/components/CtaLink";

export default function Page() {
  return (
    <>
      <div className="flagbar" aria-hidden="true" />
      <header className="container">
        <nav className="nav" aria-label="main">
          <div className="brand">Aapki<span style={{color:"var(--green)"}}>In</span>Naukri</div>
          <div className="menu">
            <a href="#how">How it Works</a>
            <a href="#earnings">Earnings</a>
            <a href="#benefits">Benefits</a>
            <a href="#faq">FAQ</a>
          </div>
          <CtaLink className="cta">Get Started</CtaLink>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="container hero">
          <div>
            <div className="pill">Daily Updated — New earning opportunities added</div>
            <h1>
              Earn Money Online — <span style={{color:"var(--green)"}}>No Experience Needed</span>
            </h1>
            <p className="sub">Use your smartphone to complete simple tasks. Flexible timing, daily payouts, start within 24 hours.</p>
            <div className="cta-row">
              <CtaLink className="cta">Claim Your ₹500 Bonus</CtaLink>
              <CtaLink className="cta ghost">Apply in 2 Minutes</CtaLink>
            </div>
            <p className="muted" style={{marginTop:10}}>Get paid via UPI or bank transfer • Trusted by thousands across India</p>
          </div>

          <div className="card" aria-hidden="true">
            {/* simple abstract illustration */}
            <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
              <rect x="0" y="0" width="360" height="240" rx="16" fill="#fff"/>
              <circle cx="110" cy="80" r="44" fill="#1565c0"/>
              <rect x="86" y="128" width="48" height="68" rx="10" fill="#2e7d32"/>
              <rect x="170" y="56" width="160" height="100" rx="14" fill="#fff3e0" stroke="#ffd7b3"/>
              <rect x="190" y="74" width="120" height="14" rx="7" fill="#ff6f00" opacity=".9"/>
              <rect x="190" y="98" width="100" height="12" rx="6" fill="#2e7d32" opacity=".9"/>
              <rect x="190" y="120" width="90" height="12" rx="6" fill="#1565c0" opacity=".9"/>
            </svg>
          </div>
        </section>

        {/* EARNINGS */}
        <section id="earnings" className="section" style={{background:"linear-gradient(90deg,#3057ff10,#ff6f0010)"}}>
          <div className="container" style={{display:"grid",gap:18,gridTemplateColumns:"repeat(2,1fr)"}}>
            <div className="card">
              <h2 className="title">Real Earnings by Real People</h2>
              <div style={{display:"grid",gap:18,gridTemplateColumns:"repeat(2,1fr)"}}>
                <div className="card" style={{textAlign:"center"}}>
                  <div style={{fontSize:"2rem",fontWeight:800}}>₹8,342</div>
                  <div className="muted">Rohit from Mumbai in 3 weeks</div>
                </div>
                <div className="card" style={{textAlign:"center"}}>
                  <div style={{fontSize:"2rem",fontWeight:800}}>₹12,210</div>
                  <div className="muted">Priya from Delhi in 1 month</div>
                </div>
              </div>
              <div style={{marginTop:14}}><CtaLink className="cta">Start Earning</CtaLink></div>
            </div>
            <div className="card">
              <h2 className="title">Why People Choose Us</h2>
              <ul className="muted">
                <li>Simple tasks — app testing, data entry, micro-surveys</li>
                <li>Flexible timing — work 1–4 hours/day</li>
                <li>Daily payouts — UPI or bank transfer</li>
                <li>Quick approval — start within 24 hours</li>
              </ul>
              <div style={{marginTop:14}}><CtaLink className="cta ghost">Apply Now</CtaLink></div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="section">
          <div className="container">
            <h2 className="title">Benefits</h2>
            <div className="grid-3">
              <div className="card">
                <h3 style={{color:"var(--green)"}}>Simple Tasks</h3>
                <p className="muted">Complete easy tasks from your phone or laptop.</p>
              </div>
              <div className="card">
                <h3 style={{color:"var(--saffron)"}}>Flexible Timing</h3>
                <p className="muted">Choose your own hours. Perfect for students and homemakers.</p>
              </div>
              <div className="card">
                <h3 style={{color:"#1565c0"}}>Daily Payments</h3>
                <p className="muted">Withdraw via UPI or bank transfer. No minimums.</p>
              </div>
            </div>
            <div style={{marginTop:18}}><CtaLink className="cta">Get Started</CtaLink></div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section" style={{background:"#fafafa"}}>
          <div className="container">
            <h2 className="title">How It Works</h2>
            <div className="steps">
              <div className="card step">
                <div className="badge">1</div>
                <h3>Sign Up Free</h3>
                <p className="muted">Apply with your email and mobile. Takes 2 minutes.</p>
              </div>
              <div className="card step">
                <div className="badge" style={{background:"linear-gradient(180deg,var(--green),#1b5e20)"}}>2</div>
                <h3>Complete Tasks</h3>
                <p className="muted">Choose tasks that fit your interests. Work from anywhere.</p>
              </div>
              <div className="card step">
                <div className="badge" style={{background:"linear-gradient(180deg,#1565c0,#0d47a1)"}}>3</div>
                <h3>Get Paid</h3>
                <p className="muted">Receive daily payouts via UPI or bank transfer.</p>
              </div>
            </div>
            <div style={{textAlign:"center",marginTop:16}}>
              <CtaLink className="cta">Start Now</CtaLink>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section" style={{background:"#fafafa"}}>
          <div className="container">
            <h2 className="title">Frequently Asked Questions</h2>
            <div className="grid-2">
              <div className="card">
                <h3>Do I need experience?</h3>
                <p className="muted">No. If you can use a smartphone, you can start today.</p>
              </div>
              <div className="card">
                <h3>How much can I earn?</h3>
                <p className="muted">Many earn ₹6,000–₹12,000/month part-time. It depends on time spent and tasks completed.</p>
              </div>
              <div className="card">
                <h3>How do I get paid?</h3>
                <p className="muted">Daily payouts via UPI or bank transfer. No minimum withdrawal.</p>
              </div>
              <div className="card">
                <h3>Full-time or part-time?</h3>
                <p className="muted">Fully flexible. Work 1–4 hours/day whenever you want.</p>
              </div>
            </div>
            <div style={{marginTop:16}}><CtaLink className="cta">Apply Free</CtaLink></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container" style={{textAlign:"center"}}>
          <div className="footlinks">
            <CtaLink>Privacy Policy</CtaLink>
            <CtaLink>Terms of Service</CtaLink>
            <CtaLink>Contact</CtaLink>
            <CtaLink>FAQ</CtaLink>
          </div>
          <div className="muted" style={{marginTop:10}}>
            © {new Date().getFullYear()} AapkiInNaukri. All rights reserved.
          </div>
        </div>
      </footer>

      <CtaLink className="cta sticky" ariaLabel="Apply Now">Apply Now</CtaLink>
    </>
  );
}
