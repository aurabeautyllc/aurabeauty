import { BOOKING_URL } from "@/data/services";

interface Props {
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}

/**
 * Primary booking CTA — routes to the live Square Appointments flow
 * which handles scheduling, deposits and payment natively.
 */
export default function BookButton({
  children = "Book Now",
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-block text-[0.76rem] uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300 active:scale-[0.97]";
  const styles =
    variant === "solid"
      ? "bg-clay text-primary-foreground hover:bg-mocha"
      : variant === "outline"
        ? "border border-espresso/70 text-espresso hover:bg-espresso hover:text-bone"
        : "border border-bone/70 text-bone hover:bg-bone hover:text-espresso";

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
