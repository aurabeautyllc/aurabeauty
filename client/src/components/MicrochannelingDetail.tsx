/*
  AURA BEAUTY — Microchanneling explainer + gallery
  Quiet Atelier: warm neutrals, clay-rose accent, editorial serif headings.
  - Explains the Pro vs MD difference (collagen / cellular turnover) in plain language.
  - Shows the real ProCell device and client before/after results.
*/
import { useReveal } from "@/hooks/useReveal";

const DEVICE_CASE = "/manus-storage/device_case_06903fba.jpeg";
const DEVICE_PEN = "/manus-storage/device_pen_81208c65.jpeg";

const RESULTS: { src: string; caption: string }[] = [
  {
    src: "/manus-storage/ba_texture_2abcf90e.jpeg",
    caption: "Acne scarring & texture — smoother, more refined skin over a series of treatments.",
  },
  {
    src: "/manus-storage/ba_cheek_a6efde4f.jpeg",
    caption: "Deep cheek acne scarring — visibly softened depth and improved skin surface.",
  },
  {
    src: "/manus-storage/ba_mature_ab60be0f.jpeg",
    caption: "Mature skin — firmer texture and softened fine lines with collagen stimulation.",
  },
];

export default function MicrochannelingDetail() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="mt-16 border-t border-border pt-14">
      {/* Pro vs MD explainer */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow reveal">Choosing Your Treatment</p>
          <h3
            className="display mt-3 text-3xl text-espresso reveal sm:text-4xl"
            style={{ transitionDelay: "60ms" }}
          >
            Pro vs. MD — which is right for you?
          </h3>
          <p
            className="mt-5 max-w-md text-sm font-light leading-relaxed text-espresso/70 reveal"
            style={{ transitionDelay: "120ms" }}
          >
            The difference comes down to your skin's cellular turnover. Around age 25,
            we begin losing roughly 1% of our collagen each year — and by the mid-30s
            to 40s, that loss becomes far more noticeable. The right serum is matched
            to where your skin is in that journey.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {/* PRO */}
          <div
            className="reveal flex flex-col rounded-t-[2rem] rounded-b-sm border border-border bg-card/70 p-7"
            style={{ transitionDelay: "120ms" }}
          >
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-clay">
              Microchanneling Pro
            </span>
            <h4 className="mt-3 font-serif text-2xl text-espresso">For younger skin</h4>
            <p className="mt-4 text-sm font-light leading-relaxed text-espresso/70">
              Ideal for younger clients whose natural cellular turnover is already
              highly active. At this stage the skin renews efficiently on its own, so a
              gentler serum is all that's needed to stimulate and maintain healthy
              collagen.
            </p>
          </div>

          {/* MD */}
          <div
            className="reveal flex flex-col rounded-t-[2rem] rounded-b-sm border border-clay/30 bg-clay/10 p-7"
            style={{ transitionDelay: "180ms" }}
          >
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-clay">
              Microchanneling MD
            </span>
            <h4 className="mt-3 font-serif text-2xl text-espresso">For mature skin</h4>
            <p className="mt-4 text-sm font-light leading-relaxed text-espresso/70">
              Best suited for clients in their mid-30s to 40s and beyond, when collagen
              loss is more pronounced. The MD serum is a stronger formulation that helps
              stimulate collagen production more aggressively to meet that need.
            </p>
          </div>
        </div>
      </div>

      {/* Device */}
      <div className="mt-16">
        <p className="eyebrow reveal">The Tools I Use</p>
        <h3
          className="display mt-3 text-3xl text-espresso reveal sm:text-4xl"
          style={{ transitionDelay: "60ms" }}
        >
          ProCell Therapies
        </h3>
        <p
          className="mt-4 max-w-xl text-sm font-light leading-relaxed text-espresso/70 reveal"
          style={{ transitionDelay: "120ms" }}
        >
          I use the professional ProCell Therapies microchanneling system — a precise,
          controlled device paired with growth-factor serums to encourage your skin's
          natural renewal.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-5">
          <figure className="reveal overflow-hidden rounded-t-[2.25rem] rounded-b-sm sm:col-span-3">
            <img
              src={DEVICE_CASE}
              alt="Tatiana holding the ProCell Therapies device case"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
          <figure
            className="reveal overflow-hidden rounded-t-[2.25rem] rounded-b-sm sm:col-span-2"
            style={{ transitionDelay: "80ms" }}
          >
            <img
              src={DEVICE_PEN}
              alt="Close-up of the ProCell microchanneling device"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </div>

      {/* Real client results */}
      <div className="mt-16">
        <p className="eyebrow reveal">Real Client Results</p>
        <h3
          className="display mt-3 text-3xl text-espresso reveal sm:text-4xl"
          style={{ transitionDelay: "60ms" }}
        >
          Before & after
        </h3>
        <p
          className="mt-4 max-w-xl text-sm font-light leading-relaxed text-espresso/70 reveal"
          style={{ transitionDelay: "120ms" }}
        >
          Progress from my own clients, shown top (before) to bottom (after). Individual
          results vary and typically build over a series of treatments.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => (
            <figure
              key={r.src}
              className="reveal overflow-hidden rounded-t-[2.25rem] rounded-b-sm border border-border bg-card/50"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={r.src}
                alt={r.caption}
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-[0.72rem] font-light leading-relaxed text-espresso/65">
                {r.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
