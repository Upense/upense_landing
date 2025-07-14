import { useState } from "react";
import { motion } from "framer-motion";

export default function UpenseLanding() {
  const [open, setOpen] = useState(false);

  /* ------------ simple palette --------------
     accent     #6246ea   (violet‑600)
     accent‑light #ebe8ff  (violet‑50)
     mint       #4ade80   (emerald‑400) – for small highlights
  -------------------------------------------*/

  return (
    <div className="font-inter text-slate-800 selection:bg-emerald-200/40">
      {/* ======== NAVBAR ======== */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#hero" className="text-2xl font-extrabold text-violet-700">Upense.</a>

          <nav className="hidden items-center gap-10 text-sm md:flex">
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Work", "#portfolio"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a key={link} href={link} className="transition hover:text-violet-700">
                {label}
              </a>
            ))}
          </nav>

          {/* burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <svg className="h-6 w-6 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white shadow-inner"
          >
            <div className="space-y-3 px-6 pb-4">
              {[
                ["Services", "#services"],
                ["About", "#about"],
                ["Work", "#portfolio"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setOpen(false)}
                  className="block pt-3 text-sm font-medium hover:text-violet-700"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* ======== HERO ======== */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-violet-50 pt-24 md:pt-32">
        {/* decorative blob */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Elevating <span className="text-violet-700">Mobile Ideas</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            We design and build native & cross‑platform apps — fast, transparent and in true partnership with your business.
          </p>
          <a
            href="mailto:hello@upense.com"
            className="mt-10 inline-block rounded-full bg-violet-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-violet-700"
          >
            Contact&nbsp;Us
          </a>
        </motion.div>
      </section>

      {/* ======== SERVICES ======== */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Our Expertise</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "iOS & Android Apps",
                text: "Swift, Kotlin or Flutter — we pick the stack that fits your goals and budget.",
              },
              {
                title: "UI / UX Design",
                text: "Rapid interactive prototypes and polished interfaces that convert.",
              },
              {
                title: "Backend & DevOps",
                text: "Serverless, Firebase, Go + CI/CD – releases are literally one click.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-violet-50 p-8 shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-violet-700">{c.title}</h3>
                <p className="mt-4 text-sm text-slate-700">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section id="about" className="bg-violet-700 py-24 text-violet-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Why Upense?</h2>
          <p className="mt-6 leading-relaxed">
            We are a tight‑knit distributed team of senior engineers & designers. Zero corporate bureaucracy — only outcome‑driven delivery: short time‑to‑market,
            full transparency and long‑term product care.
          </p>
        </div>
      </section>

      {/* ======== PORTFOLIO ======== */}
      <section id="portfolio" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Selected Projects</h2>
          <p className="mt-6 text-slate-600">The case‑studies section is on its way — stay tuned.</p>
        </div>
      </section>

      {/* ======== FOOTER / CONTACT ======== */}
      <footer id="contact" className="bg-slate-900 py-20 text-slate-100">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-2xl font-semibold">Ready to talk?</h3>
          <a
            href="mailto:hello@upense.com"
            className="mt-6 inline-block rounded-full bg-violet-500 px-9 py-3 font-semibold text-white shadow-md transition hover:-translate-y-1 hover:bg-violet-600"
          >
            hello@upense.com
          </a>
          <a
      href="https://t.me/upense_dev"
      target="_blank" rel="noopener noreferrer"
      className="mt-4 inline-block rounded-full border-2 border-violet-400
                 px-9 py-3 font-semibold text-violet-100 hover:bg-violet-500
                 hover:border-violet-500 transition"
    >
      @upense_dev
    </a>
          <p className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} Upense Studio</p>
        </div>
      </footer>
    </div>
  );
}
