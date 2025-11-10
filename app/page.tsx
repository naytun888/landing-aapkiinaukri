"use client";

import CtaLink from "../components/CtaLink";

export default function Page() {
  return (
    <>
      <div className="flagbar" aria-hidden="true" />

      <header className="container">
        <nav className="nav" aria-label="main">
          <div className="brand">
            Aapki<span style={{ color: "var(--green)" }}>In</span>Naukri
          </div>
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
        {/* Hero Section */}
        <section className="container hero">
          <div>
            <div className="pill">Daily Updated — New earning opportunities</div>
            <h1>
              Earn Money Online —{" "}
              <span style={{ color: "var(--green)" }}>No Experience Needed</span>
            </h1>
            <p className="sub">
              Use your smartphone to complete simple tasks. Flexible timing, daily payouts,
              and start within 24 hours.
            </p>
            <div className="cta-row">
              <CtaLink className="cta">Claim Your ₹500 Bonus</CtaLink>
              <CtaLink className="cta ghost">Apply in 2 Minutes</CtaLink>
            </div>
          </div>

          <div className="card" aria-hidden="true">
            <svg
              viewBox="0 0 360 240"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "auto" }}
            >
              <rect width="360" height="240" rx="16" fill="#fff" />
              <circle cx="110" cy="80" r="44" fill="#1565c0" />
              <rect x="86" y="128" width="48" height="68" rx="10" fill="#2e7d32" />
              <rect
                x="170"
                y="56"
                width="160"
                height="100"
                rx="14"
                fill="#fff3e0"
                stroke="#ffd7b3"
              />
              <rect x="190" y="74" width="120" height="14" rx="7" fill="#ff6f00" opacity=".9" />
              <rect x="190" y="98" width="100" height="12" rx="6" fill="#2e7d32" opacity=".9" />
              <rect x="190" y="120" width="90" height="12" rx="6" fill="#1565c0" opacity=".9" />
            </svg>
          </div>
        </section>

        {/* Quick Info */}
        <section id="earnings" className="section" style={{ background: "#fafafa" }}>
          <div className="container grid-2">
            <div className="card" style={{ textAlign: "center" }}>
              <h2 className="title">Real Earnings</h2>
              <p className="muted">
                Rohit earned ₹8,342 in 3 weeks. Priya earned ₹12,210 in 1 month. You can too!
              </p>
              <CtaLink className="cta">Start Earning</CtaLink>
            </div>
            <div className="card">
              <h2 className="title">Why Choose Us?</h2>
              <ul className="muted">
                <li>Simple tasks — app testing, data entry, surveys</li>
                <li>Flexible hours — 1–4 hours/day</li>
                <li>Daily payouts — UPI or bank transfer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="section">
          <div className="container">
            <h2 className="title">How It Works</h2>
            <div className="steps">
              <div className="card step">
                <div className="badge">1</div>
                <h3>Sign Up Free</h3>
                <p className="muted">Apply with your email and mobile in 2 minutes.</p>
              </div>
              <div className="card step">
                <div className="badge" style={{ background: "var(--green)" }}>
                  2
                </div>
                <h3>Complete Tasks</h3>
                <p className="muted">Choose simple jobs that match your interests.</p>
              </div>
              <div className="card step">
                <div className="badge" style={{ background: "var(--saffron)" }}>
                  3
                </div>
                <h3>Get Paid</h3>
                <p className="muted">Receive money daily via UPI or bank.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="footlinks">
              <CtaLink>Privacy</CtaLink>
              <CtaLink>Terms</CtaLink>
              <CtaLink>Contact</CtaLink>
            </div>
            <div className="muted" style={{ marginTop: 10 }}>
              © {new Date().getFullYear()} AapkiInNaukri. All rights reserved.
            </div>
          </div>
        </footer>
      </main>

      {/* Sticky CTA */}
      <CtaLink className="cta sticky" ariaLabel="Apply Now">
        Apply Now
      </CtaLink>
    </>
  );
}
