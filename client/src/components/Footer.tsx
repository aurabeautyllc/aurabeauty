// Quiet Atelier footer — espresso ground, bone text, restrained layout.
import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { BOOKING_URL, businessInfo } from "@/data/services";

const LOGO = "/manus-storage/logo_7bacdbb9.png";

export default function Footer() {
  return (
    <footer className="bg-espresso text-bone/80">
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src={LOGO} alt="Aura Beauty" className="h-10 w-10 object-contain" />
              <span className="font-serif text-3xl text-bone">Aura Beauty</span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-bone/65">
              A personal esthetics and lash atelier in Nampa, Idaho. Custom treatments
              and quiet luxury — designed to help you feel like the most radiant version
              of yourself.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-[0.74rem] uppercase tracking-[0.2em] border border-bone/40 px-7 py-3 text-bone transition-colors duration-300 hover:bg-clay hover:border-clay"
            >
              Book an Appointment
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="eyebrow !text-bone/50">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm font-light">
              <li><Link href="/" className="link-underline hover:text-bone">Home</Link></li>
              <li><Link href="/services" className="link-underline hover:text-bone">Services & Pricing</Link></li>
              <li><Link href="/gallery" className="link-underline hover:text-bone">Gallery</Link></li>
              <li><Link href="/#about" className="link-underline hover:text-bone">About Tatiana</Link></li>
              <li><Link href="/#visit" className="link-underline hover:text-bone">Hours & Location</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="eyebrow !text-bone/50">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-clay" />
                <a href={businessInfo.directions} target="_blank" rel="noopener noreferrer" className="hover:text-bone">
                  {businessInfo.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-clay" />
                <a href={businessInfo.phoneHref} className="hover:text-bone">{businessInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-clay" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-bone break-all">{businessInfo.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="shrink-0 text-clay" />
                <a href="https://www.instagram.com/aurabeauty444" target="_blank" rel="noopener noreferrer" className="hover:text-bone">
                  @aurabeauty444
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-bone/15 pt-8 text-xs font-light text-bone/45 md:flex-row">
          <span>© {new Date().getFullYear()} Aura Beauty LLC. All rights reserved.</span>
          <span>Esthetics & Lash Studio — Nampa, Idaho</span>
        </div>
      </div>
    </footer>
  );
}
