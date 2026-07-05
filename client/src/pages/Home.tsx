/*
  AURA BEAUTY — Home
  Quiet Atelier: editorial luxury, warm neutrals (bone/oat/taupe), single clay-rose accent.
  Cormorant Garamond display serif + Jost sans. Asymmetric, full-bleed, generous whitespace.
*/
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Sparkles, Leaf, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookButton from "@/components/BookButton";
import { useReveal } from "@/hooks/useReveal";
import {
  serviceCategories,
  testimonials,
  businessInfo,
} from "@/data/services";

const HERO = "/manus-storage/hero_f34e692b.jpeg";
const ABOUT = "/manus-storage/tatiana_9c61c0b5.webp";
const STUDIO = "/manus-storage/salon_room_b7d3a8c1.jpeg";
const SALON_ROOM = "/manus-storage/salon_room_b7d3a8c1.jpeg";
const SALON_MIRROR = "/manus-storage/salon_mirror_96dd6003.jpeg";
const CTA = "/manus-storage/cta_e9b175a3.jpeg";

const featured = ["facials", "lashes", "microchanneling", "brows"];

export default function Home() {
  const ref = useReveal<HTMLDivElement>();

  // Smooth-scroll to in-page anchors when arriving with a hash.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
    }
  }, []);

  const cards = serviceCategories.filter((c) => featured.includes(c.id));

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Navbar />

      {/* ───────────── HERO ───────────── */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="A serene facial treatment at Aura Beauty"
          className="absolute inset-0 h-full w-full object-cover object-[78%_center] sm:object-[70%_center] lg:object-center"
        />
        {/* Horizontal wash keeps the headline readable over the lit side of the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/65 via-espresso/35 to-transparent" />
        {/* Extra vertical wash on small screens so the lower text/CTA band stays crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-espresso/20 sm:from-espresso/30 lg:hidden" />
        <div className="grain absolute inset-0" />

        <div className="container relative flex h-full flex-col justify-center">
          <div className="max-w-2xl">
            <p className="eyebrow !text-bone/85 reveal">Esthetics & Lash Studio — Nampa, Idaho</p>
            <h1 className="display mt-5 text-5xl text-bone sm:text-6xl lg:text-7xl reveal" style={{ transitionDelay: "80ms" }}>
              Skin that feels like you,
              <span className="italic text-bone/95"> only more radiant.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base font-light leading-relaxed text-bone/85 reveal" style={{ transitionDelay: "160ms" }}>
              Personalized facials, lashes, microchanneling and brows — thoughtfully
              tailored to your skin and your goals by Tatiana Kucera.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 reveal" style={{ transitionDelay: "240ms" }}>
              <BookButton variant="solid">Book an Appointment</BookButton>
              <Link
                href="/services"
                className="link-underline text-[0.78rem] uppercase tracking-[0.2em] text-bone"
              >
                View the Menu
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.35em] text-bone/60">
          Scroll
        </div>
      </section>

      {/* ───────────── INTRO STATEMENT ───────────── */}
      <section className="relative grain bg-bone py-24 lg:py-32">
        <div className="container grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">The Philosophy</p>
            <h2 className="display mt-5 text-4xl text-espresso sm:text-5xl lg:text-[3.4rem] reveal" style={{ transitionDelay: "60ms" }}>
              A quiet kind of luxury, built around{" "}
              <span className="italic text-clay">your skin.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-espresso/75 reveal" style={{ transitionDelay: "120ms" }}>
              With over five years of experience, every treatment at Aura Beauty is
              created with intention. No rushing, no one-size-fits-all — just careful,
              results-driven care in a calm, welcoming space. From the moment you walk
              in to the moment you leave, the experience is unlike any other.
            </p>
          </div>

          <div className="grid gap-6 lg:col-span-5">
            {[
              { icon: Sparkles, title: "Personalized", text: "Every facial and lash set is mapped to you — your skin, your eyes, your goals." },
              { icon: Leaf, title: "Considered", text: "Quality products and thoughtful protocols, never rushed or generic." },
              { icon: HeartHandshake, title: "Welcoming", text: "A comfortable, judgment-free space where you can truly exhale." },
            ].map((f, i) => (
              <div
                key={f.title}
                className="flex items-start gap-5 border-b border-border pb-6 reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <f.icon className="mt-1 h-6 w-6 shrink-0 text-clay" strokeWidth={1.4} />
                <div>
                  <h3 className="font-serif text-xl text-espresso">{f.title}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-espresso/70">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURED SERVICES ───────────── */}
      <section className="bg-oat/60 py-24 lg:py-32">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow reveal">The Service Menu</p>
              <h2 className="display mt-4 text-4xl text-espresso sm:text-5xl reveal" style={{ transitionDelay: "60ms" }}>
                Treatments, made for you.
              </h2>
            </div>
            <Link
              href="/services"
              className="link-underline group flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.2em] text-espresso reveal"
            >
              All Services & Pricing
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/services#${cat.id}`}
                className="group reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="overflow-hidden rounded-t-[3rem] rounded-b-sm">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ transitionTimingFunction: "var(--ease-out)" }}
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-espresso">{cat.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-espresso/65">{cat.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-clay">
                  Explore
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── ABOUT TATIANA ───────────── */}
      <section id="about" className="relative grain bg-bone py-24 lg:py-32 scroll-mt-20">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <div className="overflow-hidden rounded-t-[5rem] rounded-b-sm">
              <img src={ABOUT} alt="Tatiana Kucera, founder of Aura Beauty" className="w-full object-cover" />
            </div>
          </div>
          <div>
            <p className="eyebrow reveal">Meet Your Esthetician</p>
            <h2 className="display mt-5 text-4xl text-espresso sm:text-5xl reveal" style={{ transitionDelay: "60ms" }}>
              Hi, I'm Tatiana.
            </h2>
            <div className="mt-7 space-y-5 text-base font-light leading-relaxed text-espresso/75">
              <p className="reveal" style={{ transitionDelay: "120ms" }}>
                I'm an aesthetician and lash artist with over five years of experience,
                and I'm genuinely passionate about high-quality work in a comfortable,
                welcoming environment. My goal is to help every client feel confident and
                reach their own unique beauty goals through personalized care.
              </p>
              <p className="reveal" style={{ transitionDelay: "180ms" }}>
                With a lot of love and careful thought poured into everything I do, I hope
                you enjoy all I have to offer — and share the experience with others.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 reveal" style={{ transitionDelay: "240ms" }}>
              <BookButton variant="outline">Book With Tatiana</BookButton>
              <a href={businessInfo.phoneHref} className="link-underline text-[0.78rem] uppercase tracking-[0.2em] text-espresso/80">
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── EXPERIENCE BAND ───────────── */}
      <section className="relative overflow-hidden">
        <img src={STUDIO} alt="The Aura Beauty studio" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-espresso/65" />
        <div className="grain absolute inset-0" />
        <div className="container relative py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="eyebrow !text-bone/80 reveal">The Experience</p>
            <h2 className="display mt-5 text-4xl text-bone sm:text-5xl lg:text-[3.2rem] reveal" style={{ transitionDelay: "60ms" }}>
              Three steps to skin you'll love.
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {[
                { n: "01", t: "Book", d: "Choose a day and time that works for you through our online scheduler." },
                { n: "02", t: "Customize", d: "We assess your skin and tailor a treatment to your concerns and goals." },
                { n: "03", t: "Glow", d: "Leave relaxed, refreshed and radiant — with a plan for lasting results." },
              ].map((s, i) => (
                <div key={s.n} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-serif text-3xl text-clay">{s.n}</span>
                  <h3 className="mt-3 font-serif text-2xl text-bone">{s.t}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-bone/75">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 reveal">
              <BookButton variant="light">Start Your Plan</BookButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section className="bg-oat/60 py-24 lg:py-32">
        <div className="container">
          <p className="eyebrow text-center reveal">Word of Mouth</p>
          <h2 className="display mt-4 text-center text-4xl text-espresso sm:text-5xl reveal" style={{ transitionDelay: "60ms" }}>
            Loved by the Treasure Valley.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="flex flex-col border-t border-clay/40 pt-8 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <blockquote className="font-serif text-xl font-light italic leading-relaxed text-espresso/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── VISIT / HOURS ───────────── */}
      <section id="visit" className="relative grain bg-bone py-24 lg:py-32 scroll-mt-20">
        <div className="container grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow reveal">Visit the Studio</p>
            <h2 className="display mt-5 text-4xl text-espresso sm:text-5xl reveal" style={{ transitionDelay: "60ms" }}>
              Find your way to us.
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-espresso/75 reveal" style={{ transitionDelay: "120ms" }}>
              Tucked in the heart of Nampa, Idaho. Easy parking, a calm space, and a warm
              welcome waiting for you.
            </p>

            <div className="mt-9 space-y-5 reveal" style={{ transitionDelay: "180ms" }}>
              <div>
                <h4 className="eyebrow !text-espresso/40">Address</h4>
                <a href={businessInfo.directions} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-block font-serif text-xl text-espresso">
                  {businessInfo.address}
                </a>
              </div>
              <div className="flex gap-12">
                <div>
                  <h4 className="eyebrow !text-espresso/40">Phone</h4>
                  <a href={businessInfo.phoneHref} className="link-underline mt-2 inline-block font-serif text-xl text-espresso">
                    {businessInfo.phone}
                  </a>
                </div>
                <div>
                  <h4 className="eyebrow !text-espresso/40">Email</h4>
                  <a href={`mailto:${businessInfo.email}`} className="link-underline mt-2 inline-block font-serif text-lg text-espresso break-all">
                    Email Tatiana
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <BookButton variant="solid">Book Online</BookButton>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <div className="border border-border bg-card p-9">
              <h4 className="eyebrow">Studio Hours</h4>
              <ul className="mt-6 divide-y divide-border">
                {businessInfo.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-3.5">
                    <span className="font-serif text-lg text-espresso">{h.day}</span>
                    <span className={`text-sm font-light ${h.time === "Closed" ? "text-espresso/40" : "text-espresso/75"}`}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FINAL CTA ───────────── */}
      <section className="relative overflow-hidden">
        <img src={CTA} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-espresso/30" />
        <div className="grain absolute inset-0" />
        <div className="container relative flex flex-col items-center py-28 text-center lg:py-36">
          <p className="eyebrow !text-bone/80 reveal">Your Glow Starts Here</p>
          <h2 className="display mt-5 max-w-2xl text-4xl text-bone sm:text-5xl lg:text-6xl reveal" style={{ transitionDelay: "60ms" }}>
            Pull up a chair — let's get started.
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-bone/85 reveal" style={{ transitionDelay: "120ms" }}>
            Booking takes a minute. Pick your treatment, choose a time, and the rest is on me.
          </p>
          <div className="mt-9 reveal" style={{ transitionDelay: "180ms" }}>
            <BookButton variant="light">Book Your Appointment</BookButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
