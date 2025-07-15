import { useState } from "react";
import { motion } from "framer-motion";

export default function UpenseLanding() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-inter text-slate-800 scroll-smooth selection:bg-emerald-200/40">
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
            href="#contact"
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
          <div className="mt-4 flex justify-center gap-6">
            {/* Telegram Icon */}
            <a href="https://t.me/upense_dev" target="_blank" rel="noopener noreferrer" className="transition hover:text-violet-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.588 4.18l-2.528 11.96c-.192.852-.697 1.067-1.412.667l-3.902-2.88-1.882 1.81c-.208.208-.383.383-.783.383l.28-3.972 7.216-6.528c.313-.28-.068-.435-.483-.155L8.15 12.29l-3.92-1.22c-.852-.27-.868-.852.18-1.26L20.205 3c.708-.27 1.328.155 1.383 1.18z"/>
              </svg>
            </a>
            {/* WhatsApp Icon */}
            <a href="https://wa.me/79879038351" target="_blank" rel="noopener noreferrer" className="transition hover:text-violet-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.12 283.5 32 223.9 32 99.1 32 0 131.1 0 256c0 45.1 11.8 89.1 34.2 127.8L0 480l100.3-32.9C140.3 465.2 181 .4 223.9 464c124.8 0 223.9-99.1 223.9-224 0-59.6-23-115-66.9-158.9zm-157 312.6c-31.5 0-62-8.4-89-24.4l-6.4-3.8-59.4 19.5 19.9-61.2-4.1-6.5c-15.8-26.9-24-56.6-24-87.9 0-102.7 83.5-186.2 186.2-186.2 49.8 0 96.4 19.4 131.6 54.7s54.7 81.8 54.7 131.6c0 102.7-83.5 186.2-186.3 186.2zm101.2-138.2c-5.5-2.8-32.5-16-37.5-17.8-5-1.9-8.6-2.8-12.2 2.8s-14 17.8-17.1 21.5-6.3 3.1-11.8.1c-5.5-3-21.1-7.8-40.1-24.9-14.8-13.1-24.8-29.3-27.7-34.8-2.8-5.5-.3-8.5 2.5-11.3 2.6-2.6 5.5-6.9 8.3-10.3 2.8-3.5 3.8-6.3 5.7-10.5 1.9-4.1.9-7.8-.5-10.5-1.4-2.8-12.2-29.4-16.7-40.3-4.4-10.6-8.9-9.2-12.2-9.4-3.1-.2-6.7-.2-10.2-.2s-10.5 1.6-16 7.8c-5.5 6.2-21.1 20.6-21.1 50.3s21.6 58.3 24.6 62.4c3 4.1 42.6 65 103.3 91.1 14.4 6.2 25.6 9.9 34.3 12.7 14.4 4.6 27.5 3.9 37.9 2.4 11.6-1.7 35.5-14.5 40.4-28.4 4.9-13.9 4.9-25.8 3.5-28.4-1.4-2.6-5-4.1-10.5-6.9z"/>
              </svg>
            </a>
          </div>
          <p className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} Upense Studio</p>
        </div>
      </footer>
    </div>
  );
}
