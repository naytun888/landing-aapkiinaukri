"use client";

import Image from "next/image";
import CtaLink from "@/components/CtaLink";

const DEST = "https://hirepr0.com";

// Shared sizes so both illustrations match exactly
const imgWrap =
  "mx-auto w-full max-w-[560px] aspect-[4/3] rounded-3xl bg-white/60 ring-1 ring-black/5 shadow-xl overflow-hidden backdrop-blur-sm";
const imgEl = "w-full h-full object-contain";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(255,145,0,0.10),transparent_60%),radial-gradient(1200px_600px_at_50%_100%,rgba(0,150,80,0.10),transparent_60%)]">
      {/* Floating CTAs (fixed) */}
      <div
        className="fixed z-50"
        style={{
          right: "max(12px, env(safe-area-inset-right))",
          top: "max(12px, env(safe-area-inset-top))",
        }}
      >
        <CtaLink className="glass px-4 py-2 text-sm font-semibold rounded-2xl shadow-lg">
          Get Started
        </CtaLink>
      </div>

      <div
        className="fixed z-50"
        style={{
          right: "max(12px, env(safe-area-inset-right))",
          bottom: "max(12px, env(safe-area-inset-bottom))",
        }}
      >
        <CtaLink className="glass px-5 py-3 text-base font-semibold rounded-3xl shadow-xl">
          Apply Now
        </CtaLink>
      </div>

      {/* Header (logo only) */}
      <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
        <div className="mx-auto max-w-screen-md px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Aapki<span className="text-green-600">In</span>Naukri
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-screen-md px-4 sm:px-6">
        {/* Pill */}
        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
          <div className="inline-flex rounded-full border border-orange-300/50 bg-white/70 px-4 py-2 text-[13px] sm:text-sm text-orange-700 shadow-sm backdrop-blur">
            Daily Updated — New earning opportunities
          </div>
        </div>

        {/* HERO */}
        <section className="relative grid gap-6 sm:gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Earn Money Online —{" "}
              <span className="text-green-700">No Experience Needed</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-neutral-700 text-base sm:text-lg">
              Use your smartphone to complete simple tasks. Flexible timing,
              daily payouts, and start within 24 hours.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3">
              <CtaLink className="glass px-5 py-3 rounded-3xl text-[15px] font-semibold shadow-md">
                Claim Your ₹500 Bonus
              </CtaLink>
              <CtaLink className="btn-outline px-5 py-3 rounded-3xl text-[15px] font-semibold">
                Apply in 2 Minutes
              </CtaLink>
            </div>

            <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-[15px]">
              UPI / Bank transfer • Work 1–4 hrs/day • Policy-friendly
              application
            </p>
          </div>

          {/* Illustration #1 */}
          <div className={imgWrap}>
            <Image
              src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
              alt="Illustration"
              width={1120}
              height={840}
              className={imgEl}
              priority
            />
          </div>

          {/* Real Results directly under Image #1 */}
          <section aria-labelledby="results" className="grid gap-4 sm:gap-6">
            <h2 id="results" className="text-2xl sm:text-3xl font-bold">
              Real Results, Real People
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/70 ring-1 ring-black/5 p-5 shadow-md backdrop-blur">
                <div className="text-2xl font-extrabold text-green-700 mb-1">
                  ₹8,342
                </div>
                <p className="text-neutral-700 text-sm">
                  Rohit earned ₹8,342 in 3 weeks. The flexible schedule helped
                  him work between classes.
                </p>
              </div>
              <div className="rounded-3xl bg-white/70 ring-1 ring-black/5 p-5 shadow-md backdrop-blur">
                <div className="text-2xl font-extrabold text-green-700 mb-1">
                  ₹12,210
                </div>
                <p className="text-neutral-700 text-sm">
                  Priya earned ₹12,210 in a month while managing home
                  responsibilities.
                </p>
              </div>
            </div>
          </section>

          {/* Illustration #2 (same size rules), placed ABOVE “Who Is This For?” */}
          <div className={imgWrap}>
            <Image
              src="https://static.naukimg.com/s/0/0/i/Events/eventsSwiperLeft-ot.png"
              alt="Illustration"
              width={1120}
              height={840}
              className={imgEl}
            />
          </div>

          {/* Who Is This For? */}
          <section className="grid gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Who Is This For?</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Students",
                  d: "Work between classes. Learn digital skills & earn.",
                },
                {
                  t: "Homemakers",
                  d: "Use free hours to complete simple mobile tasks.",
                },
                {
                  t: "Professionals",
                  d: "Add a second income stream in 1–4 hrs/day.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl bg-white/70 ring-1 ring-black/5 p-5 shadow-md backdrop-blur"
                >
                  <div className="font-semibold mb-1">{x.t}</div>
                  <div className="text-neutral-700 text-sm">{x.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="grid gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Us?</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Simple Tasks",
                  d: "App testing, surveys, short reviews—no experience needed.",
                },
                {
                  t: "Flexible Timing",
                  d: "Work anytime—early morning, lunch break, late night.",
                },
                {
                  t: "Daily Payouts",
                  d: "Direct to UPI or bank. No minimum withdrawal.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl bg-white/70 ring-1 ring-black/5 p-5 shadow-md backdrop-blur"
                >
                  <div className="font-semibold mb-1">{x.t}</div>
                  <div className="text-neutral-700 text-sm">{x.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="grid gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold">How It Works</h2>
            <div className="grid gap-4">
              {[
                {
                  n: "1",
                  t: "Apply Free",
                  d: "2-minute form with basic details. No fees.",
                },
                {
                  n: "2",
                  t: "Choose Tasks",
                  d: "Pick tasks that fit your time and interests.",
                },
                {
                  n: "3",
                  t: "Get Paid",
                  d: "Payouts via UPI or bank—usually within 24 hours.",
                },
              ].map((x) => (
                <div
                  key={x.n}
                  className="rounded-3xl bg-white/70 ring-1 ring-black/5 p-5 shadow-md backdrop-blur flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-green-600 text-white font-bold">
                    {x.n}
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{x.t}</div>
                    <div className="text-neutral-700 text-sm">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Policy Friendly */}
          <section className="grid gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ad Policy Friendly Content
            </h2>
            <p className="text-neutral-700">
              We avoid misleading claims or unrealistic promises. Earnings
              depend on your time, effort, and task availability.
            </p>
            <div>
              <CtaLink className="btn-outline px-4 py-2 rounded-2xl text-[15px] font-semibold">
                View Openings
              </CtaLink>
            </div>
          </section>

          {/* Ready to Start */}
          <section className="mt-2 grid gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to Start?</h2>
            <p className="text-neutral-700">
              Tap any button to apply. It takes less than 2 minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink className="glass px-4 py-2 rounded-2xl text-[15px] font-semibold">
                Apply Free
              </CtaLink>
              <CtaLink className="btn-outline px-4 py-2 rounded-2xl text-[15px] font-semibold">
                Get Help
              </CtaLink>
              <CtaLink className="glass px-4 py-2 rounded-2xl text-[15px] font-semibold">
                Start Today
              </CtaLink>
            </div>
          </section>

          <footer className="py-8 text-sm text-neutral-600">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={DEST} target="_blank" className="hover:underline">
                Privacy
              </a>
              <a href={DEST} target="_blank" className="hover:underline">
                Terms
              </a>
              <a href={DEST} target="_blank" className="hover:underline">
                Contact
              </a>
              <a href={DEST} target="_blank" className="hover:underline">
                FAQ
              </a>
            </div>
            <p className="mt-3">© 2025 AapkiInNaukri. All rights reserved.</p>
          </footer>
        </section>
      </main>

      {/* local styles used by CtaLink */}
      <style jsx global>{`
        .glass {
          background: radial-gradient(
              120% 120% at 0% 0%,
              rgba(255, 145, 0, 0.2),
              transparent 60%
            ),
            radial-gradient(
              120% 120% at 100% 100%,
              rgba(0, 150, 80, 0.22),
              transparent 60%
            ),
            linear-gradient(90deg, #ff9f67 0%, #ff89a9 40%, #5fd38b 100%);
          background-blend-mode: screen, screen, normal;
          color: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.35);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
        }
        .btn-outline {
          color: #0f6b3f;
          border: 1.5px solid rgba(16, 120, 70, 0.35);
          background: rgba(255, 255, 255, 0.6);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
        }
        /* ensure no accidental horizontal scroll */
        html,
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
