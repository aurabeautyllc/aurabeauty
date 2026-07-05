// Quiet Atelier — Gallery page.
// Editorial masonry of real studio work: lashes, the OPAL UV adhesive system,
// Tatiana at work, and the salt-wall treatment room. Warm bone/oat ground, clay
// accents, Cormorant serif headings, generous whitespace, soft entrance reveals.
import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookButton from "@/components/BookButton";
import { useReveal } from "@/hooks/useReveal";

type Shot = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

const SHOTS: Shot[] = [
  {
    src: "/manus-storage/gal_lash_eye_d0453b07.jpeg",
    alt: "Close-up of a finished volume lash set on a blue-grey eye",
    caption: "Custom volume set",
    tag: "Lashes",
  },
  {
    src: "/manus-storage/gal_treatment_room_27f87763.jpeg",
    alt: "The Aura Beauty treatment room with a glowing Himalayan salt-brick wall",
    caption: "The treatment room",
    tag: "The Studio",
  },
  {
    src: "/manus-storage/gal_uv_cure_fd42e73b.jpeg",
    alt: "UV-cured lash extensions being isolated under violet LED light",
    caption: "UV-cured precision",
    tag: "Lashes",
  },
  {
    src: "/manus-storage/gal_tatiana_gloves_949beff9.jpeg",
    alt: "Tatiana preparing for a treatment, gloving up beside the salt wall",
    caption: "Tatiana at work",
    tag: "The Artist",
  },
  {
    src: "/manus-storage/gal_lash_mirror_03a6d493.jpeg",
    alt: "A finished lash set viewed in a handheld mirror after a fill",
    caption: "The reveal",
    tag: "Lashes",
  },
  {
    src: "/manus-storage/gal_opal_uv_708733f0.jpeg",
    alt: "OPAL Free LED UV eyelash extension adhesive held under violet light",
    caption: "OPAL Free LED-UV adhesive",
    tag: "Products",
  },
  {
    src: "/manus-storage/gal_salt_mirror_a36fecc2.jpeg",
    alt: "The glowing salt-brick wall reflected in the studio mirror",
    caption: "Warm, calming light",
    tag: "The Studio",
  },
  {
    src: "/manus-storage/gal_opal_flatlay_70478aa3.jpeg",
    alt: "Flatlay of the OPAL Free LED-UV lash adhesive system on silk",
    caption: "Professional-grade products",
    tag: "Products",
  },
];

// Per-image aspect ratios drive a natural editorial rhythm inside a columns
// masonry, so tiles flow tightly with no empty cells.
const RATIOS = [
  "aspect-[3/4]", // lash eye (portrait)
  "aspect-[4/5]", // treatment room
  "aspect-[4/3]", // uv cure (landscape)
  "aspect-[3/4]", // tatiana gloves
  "aspect-[4/5]", // lash mirror
  "aspect-[3/4]", // opal uv
  "aspect-[4/5]", // salt mirror
  "aspect-[3/4]", // opal flatlay
];

export default function Gallery() {
  useReveal();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((i) => (i! + 1) % SHOTS.length);
      if (e.key === "ArrowLeft")
        setActive((i) => (i! - 1 + SHOTS.length) % SHOTS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <div className="min-h-screen bg-bone">
      <Navbar />

      {/* ───────────── HEADER ───────────── */}
      <section className="bg-oat/50 pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="container">
          <p className="eyebrow reveal">Our Work</p>
          <h1
            className="display mt-5 max-w-3xl text-5xl text-espresso sm:text-6xl reveal"
            style={{ transitionDelay: "60ms" }}
          >
            A look inside the{" "}
            <span className="italic text-clay">studio.</span>
          </h1>
          <p
            className="mt-7 max-w-xl text-base font-light leading-relaxed text-espresso/75 reveal"
            style={{ transitionDelay: "120ms" }}
          >
            Real lash sets, the products and tools we trust, and the warm, calming
            space where it all happens — a glimpse of the care behind every
            appointment at Aura Beauty.
          </p>
        </div>
      </section>

      {/* ───────────── MASONRY GRID ───────────── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="gap-4 [column-fill:_balance] sm:gap-5 columns-2 lg:columns-4">
            {SHOTS.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setActive(i)}
                className="group reveal relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-oat sm:mb-5"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                aria-label={`View ${shot.caption}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className={`w-full ${RATIOS[i]} object-cover transition-transform duration-700 group-hover:scale-[1.05]`}
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-bone/80">
                    {shot.tag}
                  </span>
                  <span className="mt-1 block font-serif text-lg leading-tight text-bone">
                    {shot.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="bg-oat/50 py-20 lg:py-28">
        <div className="container text-center">
          <h2 className="display text-4xl text-espresso sm:text-5xl reveal">
            Ready for your own{" "}
            <span className="italic text-clay">reveal?</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-espresso/75 reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Book your appointment online in just a few taps — we can't wait to
            welcome you.
          </p>
          <div
            className="mt-9 flex justify-center reveal"
            style={{ transitionDelay: "140ms" }}
          >
            <BookButton>Book an Appointment</BookButton>
          </div>
        </div>
      </section>

      <Footer />

      {/* ───────────── LIGHTBOX ───────────── */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={close}
        >
          <button
            className="absolute right-5 top-5 text-bone/80 transition-colors hover:text-bone"
            onClick={close}
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <figure
            className="max-h-[88vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={SHOTS[active].src}
              alt={SHOTS[active].alt}
              className="mx-auto max-h-[80vh] w-auto rounded-sm object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-bone/60">
                {SHOTS[active].tag}
              </span>
              <span className="mt-1 block font-serif text-xl text-bone">
                {SHOTS[active].caption}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
