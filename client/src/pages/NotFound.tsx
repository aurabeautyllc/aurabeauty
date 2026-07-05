import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="grain relative flex min-h-screen flex-col items-center justify-center bg-bone px-6 text-center">
      <p className="eyebrow">Aura Beauty</p>
      <h1 className="display mt-5 text-6xl text-espresso sm:text-7xl">Lost your glow?</h1>
      <p className="mt-5 max-w-md text-base font-light leading-relaxed text-espresso/70">
        The page you're looking for isn't here — but your next treatment is just a click away.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="text-[0.76rem] uppercase tracking-[0.2em] bg-clay px-8 py-3.5 text-primary-foreground transition-colors hover:bg-mocha"
        >
          Back Home
        </Link>
        <Link href="/services" className="link-underline text-[0.78rem] uppercase tracking-[0.2em] text-espresso/80">
          View Services
        </Link>
      </div>
    </div>
  );
}
