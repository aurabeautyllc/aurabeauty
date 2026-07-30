// Quiet Atelier: transparent-over-hero nav that turns solid bone on scroll.
// Wide-tracked uppercase links, serif wordmark with monogram, clay-rose Book CTA.
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO = "/manus-storage/logo_7bacdbb9.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Visit", href: "/#visit" },
];

export default function Navbar( ) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  // On non-home pages the nav always sits on bone, so force solid styling.
  const forceSolid = location !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || forceSolid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-bone/90 backdrop-blur-md border-b border-border/70 py-3"
          : "bg-transparent py-5"
      }`}
      style={{ transitionTimingFunction: "var(--ease-out)" }}
    >
      <nav className="container flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img src={LOGO} alt="Aura Beauty" className="h-9 w-9 object-contain" />
          <span
            className={`font-serif text-2xl tracking-tight leading-none transition-colors duration-500 ${
              solid ? "text-espresso" : "text-bone"
            }`}
          >
            Aura Beauty
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`link-underline text-[0.78rem] uppercase tracking-[0.18em] font-normal transition-colors duration-500 ${
                solid ? "text-espresso/80 hover:text-espresso" : "text-bone/90 hover:text-bone"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={`text-[0.74rem] uppercase tracking-[0.18em] px-6 py-2.5 border transition-all duration-300 active:scale-[0.97] ${
              solid
                ? "border-clay bg-clay text-primary-foreground hover:bg-mocha hover:border-mocha"
                : "border-bone/70 text-bone hover:bg-bone hover:text-espresso"
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${solid ? "text-espresso" : "text-bone"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
      >
        <div className="container flex flex-col gap-5 pt-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em] text-espresso/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="text-[0.78rem] uppercase tracking-[0.18em] px-6 py-3 bg-clay text-primary-foreground text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
