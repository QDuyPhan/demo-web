"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { site } from "@/content/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={site.name}>
      {site.logoImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={site.logoImage} alt={site.name} className="h-14 w-auto" />
      ) : (
        <>
          <span className="flex size-14 items-center justify-center rounded-full border-2 border-gold bg-navy-dark font-display text-lg font-bold text-gold-light">
            {site.logoMark}
          </span>
          <span className="leading-tight">
            <span className={`block font-display text-xl font-bold uppercase tracking-wide ${light ? "text-white" : "text-navy"}`}>
              {site.name}
            </span>
            <span className={`block font-display text-sm italic ${light ? "text-gold-light" : "text-gold"}`}>{site.slogan}</span>
          </span>
        </>
      )}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-40 shadow-sm">
      <div className="pattern-bg hidden md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
          <Logo />
          <div className="flex items-center gap-8 text-sm">
            <InfoItem icon={<Phone className="size-5" />} label="Hotline" value={site.hotline || "Đang cập nhật"} href={site.hotline ? `tel:${site.hotline.replace(/\s/g, "")}` : undefined} />
            <InfoItem icon={<Mail className="size-5" />} label="Email" value={site.email || "Đang cập nhật"} href={site.email ? `mailto:${site.email}` : undefined} />
            <InfoItem icon={<MapPin className="size-5" />} label="Địa chỉ" value={site.address} />
            <InfoItem icon={<Clock className="size-5" />} label="Giờ mở cửa" value={site.workingHours} />
          </div>
        </div>
      </div>

      <nav className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="py-2 md:hidden">
            <Logo light />
          </div>
          <ul className="hidden md:flex">
            {site.menu.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block px-5 py-4 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-navy-dark hover:text-gold-light ${i === 0 ? "text-gold-light" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {site.hotline && (<a
            href={`tel:${site.hotline.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-white transition hover:bg-gold-light hover:text-navy-dark md:flex"
          >
            <Phone className="size-4" /> {site.hotline}
          </a>)}
          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <ul className="border-t border-white/10 md:hidden">
            {site.menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm uppercase hover:bg-navy-dark">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

function InfoItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <span className="flex items-center gap-2">
      <span className="text-navy">{icon}</span>
      <span className="leading-tight">
        <span className="block text-xs text-neutral-500">{label}:</span>
        <span className="block max-w-44 font-medium text-navy">{value}</span>
      </span>
    </span>
  );
  return href ? <a href={href} className="hover:opacity-80">{content}</a> : content;
}
