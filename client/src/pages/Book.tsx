/*
  AURA BEAUTY — Book
  Quiet Atelier: Full-page embedded Square Appointments booking flow.
  Clients stay on-site while booking through the familiar Square interface.
*/
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOKING_URL } from "@/data/services";
import { Loader2 } from "lucide-react";

export default function Book( ) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-bone">
      <Navbar />

      {/* Hero header */}
      <section className="pt-32 pb-10 bg-espresso text-bone text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.3em] text-bone/60 mb-3">
          Schedule Your Visit
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">
          Book an Appointment
        </h1>
        <p className="mt-4 text-sm font-light text-bone/70 max-w-md mx-auto leading-relaxed">
          Choose your service, pick a time that works, and we'll handle the rest.
          Your appointment syncs directly with our calendar.
        </p>
      </section>

      {/* Embedded booking flow */}
      <section className="flex-1 flex flex-col items-center px-4 py-10 bg-bone">
        <div className="w-full max-w-3xl relative" style={{ minHeight: "800px" }}>
          {/* Loading spinner */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-bone z-10">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-clay" />
                <p className="text-sm text-espresso/60 uppercase tracking-[0.15em]">
                  Loading booking calendar…
                </p>
              </div>
            </div>
          )}

          <iframe
            src={BOOKING_URL}
            title="Book an appointment with Aura Beauty"
            className="w-full border-0 rounded-sm shadow-sm"
            style={{ height: "900px", minHeight: "700px" }}
            onLoad={() => setLoading(false)}
            allow="payment"
          />
        </div>

        <p className="mt-8 text-xs text-espresso/40 text-center max-w-md">
          Booking powered by Square Appointments. Your payment information is processed
          securely through Square.
        </p>
      </section>

      <Footer />
    </div>
  );
}
