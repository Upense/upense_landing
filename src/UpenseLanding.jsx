import { useState } from "react";
import { motion } from "framer-motion";

export default function UpenseLanding() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="font-inter text-gray-800 selection:bg-mint/30">
      {/* -------- NAV -------- */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-6">
          <a href="#hero" className="text-2xl font-extrabold text-violet-900">Upense.</a>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#services" className="hover:text-mint-dark">Services</a>
            <a href="#about" className="hover:text-mint-dark">About</a>
            <a href="#portfolio" className="hover:text-mint-dark">Work</a>
            <a href="#contact" className="hover:text-mint-dark">Contact</a>
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setNavOpen(!navOpen)} className="md:hidden">
            <svg className="h-6 w-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={!navOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 6l12 12M6 18L18 6"} />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {navOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="md:hidden bg-white shadow-inner">
            <div className="px-6 pb-4 space-y-3">
              {[
                ["Services", "#services"],
                ["About", "#about"],
                ["Work", "#portfolio"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <a key={label} href={link} onClick={() => setNavOpen(false)} className="block pt-3 text-sm font-medium text-gray-700 hover:text-mint-dark">
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* -------- HERO -------- */}
      <section id="hero" className="flex min-h-screen items-center justify-center bg-gradient-to-br from-mint/10 to-white pt-24 md:pt-32">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto max-w-3xl text-center px-6">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Elevating <span className="text-mint">Mobile Ideas</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Мы проектируем и&nbsp;разрабатываем нативные и&nbsp;кросс‑платформенные приложения — быстро, прозрачно и в партнёрстве с бизнесом.
          </p>

          <a
            href="mailto:hello@upense.com"
            className="mt-10 inline-block rounded-full bg-mint px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-mint-dark"
          >
            Связаться
          </a>
        </motion.div>
      </section>

      {/* -------- SERVICES -------- */}
      <section id="services" className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Что мы делаем</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "iOS / Android приложения",
                text: "Swift, Kotlin и Flutter — выбираем стек под задачи и бюджет.",
              },
              {
                title: "UI/UX‑дизайн",
                text: "Делаем быстрые интерактивные прототипы, отрабатываем сценарии.",
              },
              {
                title: "Backend & DevOps",
                text: "Serverless, Firebase, Go и CI/CD — чтобы релизы были нажатием одной кнопки.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-violet-50 p-8 shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-violet-900">{card.title}</h3>
                <p className="mt-4 text-sm text-gray-700">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- ABOUT -------- */}
      <section id="about" className="bg-violet-900 py-24 text-violet-50">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Почему Upense?</h2>
          <p className="mt-6 leading-relaxed">
            Мы — небольшая распределённая команда senior‑инженеров и дизайнеров. Нет
            офисной бюрократии, только фокус на результате: быстрый time‑to‑market,
            прозрачный процесс и поддержка продукта после релиза.
          </p>
        </div>
      </section>

      {/* -------- PORTFOLIO placeholder -------- */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Избранные проекты</h2>
          <p className="mt-6 text-gray-600">Раздел в разработке — скоро поделимся кейс‑стади.</p>
        </div>
      </section>

      {/* -------- CONTACT / FOOTER -------- */}
      <footer id="contact" className="bg-gray-900 py-16 text-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-2xl font-semibold">Готовы обсудить идею?</h3>
          <a
            href="mailto:hello@upense.com"
            className="mt-6 inline-block rounded-full bg-mint px-8 py-3 font-semibold text-gray-900 shadow-md transition hover:-translate-y-1"
          >
            hello@upense.com
          </a>
          <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Upense Studio</p>
        </div>
      </footer>
    </div>
  );
}

