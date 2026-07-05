/*
  AURA BEAUTY — Services & Pricing
  Quiet Atelier: editorial menu, warm neutrals, clay-rose accent. Each category
  is an editorial band; every service links out to the live Square booking flow.
*/
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookButton from "@/components/BookButton";
import { useReveal } from "@/hooks/useReveal";
import MicrochannelingDetail from "@/components/MicrochannelingDetail";
import { serviceCategories, BOOKING_URL } from "@/data/services";

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 160);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="grain relative bg-oat/60 pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="container">
          <p className="eyebrow reveal">The Full Menu</p>
          <h1 className="display mt-5 max-w-3xl text-5xl text-espresso sm:text-6xl reveal" style={{ transitionDelay: "60ms" }}>
            Services & Pricing
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-espresso/75 reveal" style={{ transitionDelay: "120ms" }}>
            From signature facials to custom lashes and microchanneling — explore the
            full menu below. Every booking and payment is handled securely online.
          </p>
          <div className="mt-9 reveal" style={{ transitionDelay: "180ms" }}>
            <BookButton variant="solid">Book an Appointment</BookButton>
          </div>
        </div>
      </section>

      {/* Category quick-nav */}
      <nav className="sticky top-[60px] z-30 border-y border-border bg-bone/90 backdrop-blur-md">
        <div className="container flex gap-7 overflow-x-auto py-4">
          {serviceCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap text-[0.72rem] uppercase tracking-[0.18em] text-espresso/70 transition-colors hover:text-clay"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Category bands */}
      {serviceCategories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`scroll-mt-32 py-20 lg:py-28 ${idx % 2 === 0 ? "bg-bone" : "bg-oat/50"} grain relative`}
        >
          <div className="container grid gap-12 lg:grid-cols-12">
            {/* Sticky category intro */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-36">
                <div className="overflow-hidden rounded-t-[3rem] rounded-b-sm reveal">
                  <img src={cat.image} alt={cat.title} className="aspect-[4/3] w-full object-cover" />
                </div>
                <p className="eyebrow mt-7 reveal">{`0${idx + 1}`}</p>
                <h2 className="display mt-3 text-4xl text-espresso reveal" style={{ transitionDelay: "60ms" }}>
                  {cat.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-espresso/70 reveal" style={{ transitionDelay: "120ms" }}>
                  {cat.blurb}
                </p>
              </div>
            </div>

            {/* Service list */}
            <div className="lg:col-span-8">
              <ul className="divide-y divide-border">
                {cat.services.map((s, i) => (
                  <li
                    key={s.name}
                    className="group reveal"
                    style={{ transitionDelay: `${Math.min(i, 6) * 50}ms` }}
                  >
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-6 py-6 transition-colors duration-300 hover:bg-card/60"
                    >
                      <div className="max-w-2xl">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-serif text-xl text-espresso transition-colors group-hover:text-clay sm:text-2xl">
                            {s.name}
                          </h3>
                          <span className="text-[0.68rem] uppercase tracking-[0.16em] text-espresso/45">
                            {s.duration}
                          </span>
                        </div>
                        {s.description && (
                          <p className="mt-2 text-sm font-light leading-relaxed text-espresso/65">
                            {s.description}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="font-serif text-2xl text-espresso">{s.price}</span>
                        <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.18em] text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Book →
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {cat.id === "microchanneling" && <MicrochannelingDetail />}
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="grain relative bg-espresso py-24 text-center lg:py-32">
        <div className="container">
          <p className="eyebrow !text-bone/70 reveal">Ready When You Are</p>
          <h2 className="display mt-5 text-4xl text-bone sm:text-5xl reveal" style={{ transitionDelay: "60ms" }}>
            Reserve your appointment.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-bone/75 reveal" style={{ transitionDelay: "120ms" }}>
            Secure online booking and payment through Square. Pick your service and a time
            that suits you.
          </p>
          <div className="mt-9 reveal" style={{ transitionDelay: "180ms" }}>
            <BookButton variant="light">Book Now</BookButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
