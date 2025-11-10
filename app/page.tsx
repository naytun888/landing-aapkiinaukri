"use client";

import CtaLink from "@/components/CtaLink";

const DEST = "https://www.hirepr0.com/";

export default function Page() {
  return (
    <>
      {/* FLOATING CTAs (RIGHT SIDE) */}
      <a href={DEST} className="floatCta floatTop" aria-label="Get Started">
        Get Started
      </a>
      <a href={DEST} className="floatCta floatBottom" aria-label="Apply Now">
        Apply Now
      </a>

      {/* TOP STRIPE */}
      <div className="triStripe" aria-hidden="true" />

      {/* NAV */}
      <header className="container">
        <nav className="nav" aria-label="main">
          <div className="brand">
            Aapki<span className="in">In</span>Naukri
          </div>
          <div className="menu">
            <a href="#how">How it Works</a>
            <a href="#earnings">Earnings</a>
            <a href="#benefits">Benefits</a>
            <a href="#contact">Contact</a>
          </div>
          {/* CtaLink in this repo doesn't take href — it already links to hirepr0.com */}
          <CtaLink className="cta">Get Started</CtaLink>
        </nav>
      </header>

      {/* HERO */}
      <main>
        <section className="container hero" id="top">
          <div className="pill">Daily Updated — New earning opportunities</div>
          <h1>
            Earn Money Online — <span className="accent">No Experience Needed</span>
          </h1>
          <p className="lede">
            Use your smartphone to complete simple tasks. Flexible timing, daily payouts,
            and start within 24 hours.
          </p>

          <div className="ctaRow">
            <CtaLink className="grad">Claim Your ₹500 Bonus</CtaLink>
            <CtaLink className="outline">Apply in 2 Minutes</CtaLink>
          </div>

          <p className="subtle">
            UPI / Bank transfer • Work 1–4 hrs/day • Policy-friendly application
          </p>

          {/* Illustration 1 */}
          <div className="card imgWrap">
            <img
              src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
              alt="People finding roles that fit their interests"
              loading="eager"
            />
            <CtaLink className="grad smallCta">Apply Now</CtaLink>
          </div>
        </section>

        {/* Illustration 2 (same sizing rules as Illustration 1) */}
        <section className="container">
          <div className="card imgWrap">
            <img
              src="https://static.naukimg.com/s/0/0/i/Events/eventsSwiperLeft-ot.png"
              alt="Opportunities banner"
              loading="lazy"
            />
          </div>
        </section>

        {/* WHO IS THIS FOR */}
        <section className="container" id="who">
          <h2>Who Is This For?</h2>
          <div className="grid3">
            <div className="card">
              <h3>Students & Freshers</h3>
              <p>Earn between classes with simple, phone-friendly tasks.</p>
            </div>
            <div className="card">
              <h3>Part-time Seekers</h3>
              <p>Pick hours that fit your day — mornings, lunch, or late evening.</p>
            </div>
            <div className="card">
              <h3>Work-from-Home</h3>
              <p>Daily payouts via UPI/bank. No investment. No fees.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="container" id="how">
          <h2>How It Works</h2>
          <ol className="steps">
            <li className="card">
              <span className="badge one">1</span>
              <h3>Apply Free</h3>
              <p>2-minute form with basic details. No fees.</p>
            </li>
            <li className="card">
              <span className="badge two">2</span>
              <h3>Choose Tasks</h3>
              <p>Pick tasks that match your time and interests.</p>
            </li>
            <li className="card">
              <span className="badge three">3</span>
              <h3>Get Paid</h3>
              <p>Receive money directly to your bank or UPI.</p>
            </li>
          </ol>
        </section>

        {/* EARNINGS */}
        <section className="container" id="earnings">
          <h2>Real Results, Real People</h2>
          <div className="grid2">
            <div className="card">
              <h3>₹8,342</h3>
              <p>Rohit earned ₹8,342 in 3 weeks. You can too.</p>
              <CtaLink className="grad smallCta">Start Earning</CtaLink>
            </div>
            <div className="card">
              <h3>₹12,210</h3>
              <p>Priya made ₹12,210 in a month while studying.</p>
              <CtaLink className="grad smallCta">Apply Now</CtaLink>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="container" id="benefits">
          <h2>Why Choose Us?</h2>
          <div className="grid3">
            <div className="card">
              <h3>Simple Tasks</h3>
              <p>Surveys, app testing, small data jobs — all mobile friendly.</p>
            </div>
            <div className="card">
              <h3>Flexible Hours</h3>
              <p>Work 1–4 hours/day — you decide.</p>
            </div>
            <div className="card">
              <h3>Daily Payouts</h3>
              <p>UPI or bank transfer. No minimum withdrawal.</p>
            </div>
          </div>
        </section>

        {/* POLICY-FRIENDLY NOTE */}
        <section className="container">
          <div className="card">
            <h2>Ad Policy Friendly Content</h2>
            <p>
              We avoid misleading claims or unrealistic promises. Earnings depend on your
              time, effort, and task availability.
            </p>
            <CtaLink className="grad">View Openings</CtaLink>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer className="container" id="contact">
          <h2>Ready to Start?</h2>
          <p>Tap any button to apply. It takes less than 2 minutes.</p>
          <div className="ctaRow">
            <CtaLink className="grad">Apply Free</CtaLink>
            <CtaLink className="outline">Get Help</CtaLink>
            <CtaLink className="grad">Start Today</CtaLink>
          </div>

          <hr />
          <div className="footlinks">
            <a href={DEST}>Privacy</a>
            <a href={DEST}>Terms</a>
            <a href={DEST}>Contact</a>
            <a href={DEST}>FAQ</a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} AapkiInNaukri. All rights reserved.
          </p>
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --green: #129e41;
          --orange: #f97316;
          --accent: #0a7f2f;
          --glass: rgba(255, 255, 255, 0.65);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          --radius: 22px;
        }
        html,
        body {
          overflow-x: hidden;
        }
        body {
          margin: 0;
          background: #f6f8f9;
          color: #111827;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue",
            Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }
        .triStripe {
          height: 6px;
          background: linear-gradient(90deg, #ff7a00, #2bb24c, #2bb24c 60%, #ff7a00);
        }
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 24px;
          padding-left: max(20px, env(safe-area-inset-left));
          padding-right: max(20px, env(safe-area-inset-right));
        }
        .nav {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 10px 24px;
          align-items: center;
        }
        .brand {
          font-weight: 800;
          font-size: clamp(20px, 3.2vw, 28px);
        }
        .brand .in {
          color: var(--green);
        }
        .menu {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }
        .menu a {
          color: #374151;
          text-decoration: none;
          font-weight: 600;
        }
        .cta {
          justify-self: end;
        }

        .hero h1 {
          font-size: clamp(28px, 6.2vw, 46px);
          line-height: 1.1;
          margin: 14px 0 10px;
        }
        .accent {
          color: var(--green);
        }
        .lede {
          font-size: clamp(16px, 3.6vw, 20px);
          color: #4b5563;
        }
        .pill {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: var(--shadow);
          margin-top: 6px;
        }
        .ctaRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin: 16px 0 8px;
        }

        .card {
          background: var(--glass);
          backdrop-filter: saturate(140%) blur(18px);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 20px;
        }

        /* Shared image sizing for both illustrations */
        .imgWrap {
          display: grid;
          gap: 12px;
          place-items: center;
          margin: 14px 0;
          padding: 12px;
        }
        .imgWrap img {
          width: 100%;
          height: auto;
          max-width: 420px;
          border-radius: 18px;
        }
        @media (min-width: 480px) {
          .imgWrap img {
            max-width: 520px;
          }
        }
        @media (min-width: 768px) {
          .imgWrap img {
            max-width: 640px;
          }
        }

        h2 {
          font-size: clamp(22px, 4.6vw, 30px);
          margin: 14px 0 12px;
        }
        h3 {
          margin: 8px 0;
        }

        .grid3 {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        .grid2 {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .grid3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .grid2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 14px;
        }
        .badge {
          display: inline-grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          color: white;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .one {
          background: #fb923c;
        }
        .two {
          background: #22c55e;
        }
        .three {
          background: #f472b6;
        }

        .smallCta {
          align-self: center;
          justify-self: center;
        }

        .subtle {
          color: #6b7280;
          margin-top: 6px;
        }

        .footlinks {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footlinks a {
          color: #374151;
          text-decoration: none;
        }
        .copyright {
          color: #6b7280;
        }

        /* Floating (fixed) glass CTAs on the RIGHT side */
        .floatCta {
          position: fixed;
          right: max(12px, env(safe-area-inset-right));
          z-index: 60;
          background: linear-gradient(135deg, #ff9365, #76d18c);
          color: white;
          text-decoration: none;
          font-weight: 800;
          padding: 10px 14px;
          border-radius: 999px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(16px) saturate(140%);
        }
        .floatTop {
          top: max(12px, calc(env(safe-area-inset-top) + 12px));
        }
        .floatBottom {
          bottom: max(16px, env(safe-area-inset-bottom));
        }

        /* Helper styles for CtaLink variants */
        .grad {
          background: linear-gradient(135deg, #ff9365, #76d18c) !important;
          color: white !important;
          border: none !important;
        }
        .outline {
          background: transparent !important;
          border: 2px solid var(--green) !important;
          color: var(--green) !important;
        }
      `}</style>
    </>
  );
}
