"use client";

import CtaLink from "../components/CtaLink";

export default function Page() {
  return (
    <>
      {/* Tricolor line */}
      <div className="flagbar" aria-hidden="true" />

      {/* Fixed CTA (top-right) */}
      <CtaLink className="cta fab-top-right" ariaLabel="Get Started">
        Get Started
      </CtaLink>

      {/* Nav */}
      <header className="container">
        <nav className="nav" aria-label="Main">
          <div className="brand">
            Aapki<span style={{ color: "var(--green)" }}>In</span>Naukri
          </div>

          {/* Hide on small screens, show on tablets/desktop */}
          <div className="menu">
            <a href="#how">How it Works</a>
            <a href="#earnings">Earnings</a>
            <a href="#benefits">Benefits</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Desktop-only secondary CTA (mobile uses fab button) */}
          <div className="menu-cta">
            <CtaLink className="cta" ariaLabel="Get Started">
              Get Started
            </CtaLink>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="container hero" id="hero">
          <div>
            <div className="pill">
              Daily Updated — New earning opportunities
            </div>
            <h1>
              Earn Money Online —{" "}
              <span style={{ color: "var(--green)" }}>No Experience Needed</span>
            </h1>
            <p className="sub">
              Use your smartphone to complete simple tasks. Flexible timing,
              daily payouts, and start within 24 hours.
            </p>

            <div className="cta-row">
              <CtaLink className="cta">Claim Your ₹500 Bonus</CtaLink>
              <CtaLink className="cta ghost">Apply in 2 Minutes</CtaLink>
            </div>

            <p className="muted" style={{ marginTop: 10 }}>
              UPI / Bank transfer • Work 1–4 hrs/day • Policy-friendly application
            </p>
          </div>

          {/* HERO images (compact) */}
          <div className="hero-visual">
            <div className="card imgWrap img-sm">
              <img
                src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
                alt="Job role illustration"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* VALUE + PROOF */}
        <section id="earnings" className="section" style={{ background: "#fafafa" }}>
          <div className="container grid-2">
            <div className="card">
              <h2 className="title">Real Results, Real People</h2>
              <p className="muted">
                People across India use part-time hours to earn extra income.
                Results vary by time spent and task availability. You’re in
                control of when and how much you work.
              </p>
              <div className="cta-row" style={{ marginTop: 10 }}>
                <CtaLink className="cta">Start Earning</CtaLink>
                <CtaLink className="cta ghost">View Openings</CtaLink>
              </div>
            </div>

            <div className="card">
              <h2 className="title">Why Choose Us?</h2>
              <ul className="muted">
                <li>Simple tasks — app testing, data entry, short surveys</li>
                <li>Flexible schedule — mornings, evenings, or weekends</li>
                <li>Fast payouts — UPI or bank transfer</li>
                <li>Free to apply — no fees, no hidden charges</li>
              </ul>
              <div style={{ marginTop: 12 }}>
                <CtaLink className="cta">Apply Free</CtaLink>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE #2 ABOVE “WHO IS THIS FOR?” */}
        <section className="container" aria-hidden="false">
          <div className="card imgWrap img-banner">
            <img
              src="https://static.naukimg.com/s/0/0/i/Events/eventsSwiperLeft-ot.png"
              alt="Events and tasks illustration"
              loading="lazy"
            />
          </div>
        </section>

        {/* WHO IS THIS FOR */}
        <section className="section" id="benefits">
          <div className="container">
            <h2 className="title">Who Is This For?</h2>
            <div className="grid-3">
              <div className="card">
                <h3 style={{ color: "var(--green)" }}>Students</h3>
                <p className="muted">
                  Earn between classes with short, phone-friendly tasks.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: "var(--saffron)" }}>Homemakers</h3>
                <p className="muted">
                  Work a few hours a day while managing your schedule.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: "#1565c0" }}>Job Seekers</h3>
                <p className="muted">
                  Get extra income while you look for a full-time role.
                </p>
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              <CtaLink className="cta">Check Your Eligibility</CtaLink>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section" style={{ background: "#fafafa" }}>
          <div className="container">
            <h2 className="title">How It Works</h2>
            <div className="steps">
              <div className="card step">
                <div className="badge">1</div>
                <h3>Apply Free</h3>
                <p className="muted">2-minute form with basic details. No fees.</p>
              </div>
              <div className="card step">
                <div
                  className="badge"
                  style={{
                    background: "linear-gradient(180deg,var(--green),#0b7f2b)",
                  }}
                >
                  2
                </div>
                <h3>Choose Tasks</h3>
                <p className="muted">Pick tasks that fit your time and interests.</p>
              </div>
              <div className="card step">
                <div
                  className="badge"
                  style={{
                    background: "linear-gradient(180deg,#ff7aa2,#ff5e7a)",
                  }}
                >
                  3
                </div>
                <h3>Get Paid</h3>
                <p className="muted">Receive payouts via UPI or bank transfer.</p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <CtaLink className="cta">Apply Now</CtaLink>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="section" style={{ background: "#fafafa" }}>
          <div className="container grid-2">
            <div className="card">
              <h2 className="title">Trust & Safety</h2>
              <ul className="muted">
                <li>Clear, upfront task instructions</li>
                <li>No signup fees or deposits</li>
                <li>Data used only to process your application</li>
                <li>Support team available for questions</li>
              </ul>
            </div>
            <div className="card">
              <h2 className="title">Ad-Policy Friendly Content</h2>
              <p className="muted">
                We avoid misleading claims or unrealistic promises. Earnings
                depend on your time, effort, and task availability.
              </p>
              <CtaLink className="cta">View Openings</CtaLink>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="title">Ready to Start?</h2>
            <p className="muted">Tap any button to apply. It takes less than 2 minutes.</p>
            <div className="cta-row" style={{ marginTop: 10 }}>
              <CtaLink className="cta">Apply Free</CtaLink>
              <CtaLink className="cta ghost">Get Help</CtaLink>
              <CtaLink className="cta">Start Today</CtaLink>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="footlinks">
            <CtaLink>Privacy</CtaLink>
            <CtaLink>Terms</CtaLink>
            <CtaLink>Contact</CtaLink>
            <CtaLink>FAQ</CtaLink>
          </div>
          <div className="muted" style={{ marginTop: 10 }}>
            © {new Date().getFullYear()} AapkiInNaukri. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Fixed CTA (bottom-right) */}
      <CtaLink className="cta fab-bottom-right" ariaLabel="Apply Now">
        Apply Now
      </CtaLink>

      {/* Mobile/overflow fixes */}
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }

        /* Wider safe padding on phones */
        .container {
          padding-left: max(16px, env(safe-area-inset-left));
          padding-right: max(16px, env(safe-area-inset-right));
        }

        /* Make hero breathe on mobile */
        .hero > div:first-child {
          padding-right: 6px;
        }

        /* Brand bigger on mobile */
        @media (max-width: 768px) {
          .brand {
            font-size: 24px;
            font-weight: 800;
          }
          /* hide menu + right CTA on phones */
          .menu,
          .menu-cta {
            display: none !important;
          }
          /* stack hero */
          .hero {
            grid-template-columns: 1fr !important;
          }
          .cta-row {
            flex-wrap: wrap;
            gap: 12px;
          }
        }

        /* Responsive images */
        .imgWrap img {
          display: block;
          width: 100%;
          height: auto;
        }
        .img-sm {
          max-width: 360px;
          margin: 0 auto;
        }
        /* Resize second image to match first */
        .img-banner {
          max-width: 360px; /* was 740px */
          margin: 12px auto 0;
        }

        /* Fixed buttons (safe-area aware) — LEFT (kept) */
        .fab-top-left {
          position: fixed;
          top: calc(env(safe-area-inset-top, 0px) + 10px);
          left: calc(env(safe-area-inset-left, 0px) + 10px);
          z-index: 60;
          opacity: 0.96;
        }
        .fab-bottom-left {
          position: fixed;
          bottom: calc(env(safe-area-inset-bottom, 0px) + 14px);
          left: calc(env(safe-area-inset-left, 0px) + 14px);
          z-index: 60;
          opacity: 0.98;
        }

        /* Fixed buttons (safe-area aware) — RIGHT (new) */
        .fab-top-right {
          position: fixed;
          top: calc(env(safe-area-inset-top, 0px) + 10px);
          right: calc(env(safe-area-inset-right, 0px) + 10px);
          z-index: 60;
          opacity: 0.96;
        }
        .fab-bottom-right {
          position: fixed;
          bottom: calc(env(safe-area-inset-bottom, 0px) + 14px);
          right: calc(env(safe-area-inset-right, 0px) + 14px);
          z-index: 60;
          opacity: 0.98;
        }

        /* Prevent any accidental width overflow from cards/images */
        .card,
        .imgWrap,
        .section,
        .hero {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}
