import Image from "next/image";
import { ArrowRight, CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "./Header";
import { ContactForm, ServicesTabs } from "./Interactive";

function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M32 4c6 8 6 20 0 30C26 24 26 12 32 4Z" />
      <path d="M32 34c-6-10-14-16-24-16 2 10 10 16 24 16Z" />
      <path d="M32 34c6-10 14-16 24-16-2 10-10 16-24 16Z" />
      <path d="M8 36h48" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-10 text-center">
      <Lotus className={`mx-auto h-8 w-12 ${light ? "text-gold-light" : "text-navy"}`} />
      <p className={`font-display text-lg italic ${light ? "text-gold-light" : "text-gold"}`}>{eyebrow}</p>
      <h2 className={`mt-1 font-display text-3xl font-bold leading-tight md:text-4xl ${light ? "text-white" : "text-neutral-900"}`}>{title}</h2>
    </div>
  );
}

function MoreButton({ href, label = "Xem thêm" }: { href: string; label?: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-dark">
      {label} <ArrowRight className="size-4" />
    </a>
  );
}

export function About() {
  const a = site.about;
  return (
    <section id="gioi-thieu" className="pattern-bg scroll-mt-28 py-16 md:py-24">
      <div data-reveal className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <Lotus className="h-8 w-12 text-navy" />
          <p className="font-display text-lg italic text-gold">{a.eyebrow}</p>
          <h2 className="mt-1 font-display text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">{a.title}</h2>
          {a.body.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-neutral-700">{p}</p>
          ))}
          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-gold/30 py-5 text-center">
            {a.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-navy md:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-neutral-600 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <MoreButton href="#lien-he" label="Liên hệ tư vấn" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {a.images.map((src, i) => (
            <div key={src} className={`relative h-72 overflow-hidden rounded-lg shadow-lg md:h-96 ${i === 1 ? "mt-10" : ""}`}>
              <Image src={src} data-full={src} data-group="about" alt={site.name} fill sizes="(min-width: 768px) 280px, 50vw" className="object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="san-pham" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div data-reveal className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Sản phẩm" title="Sản phẩm nổi bật" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.products.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image src={p.image} data-full={p.image} data-group="products" alt={p.name} fill sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <a href="#lien-he" className="mt-3 inline-block text-sm font-medium text-gold hover:underline">Liên hệ báo giá</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <MoreButton href="#lien-he" />
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const p = site.pricing;
  return (
    <section id="bang-gia" className="scroll-mt-28 bg-white pb-16 md:pb-24">
      <div data-reveal className="mx-auto max-w-4xl px-4">
        <SectionTitle eyebrow={p.eyebrow} title={p.title} />
        <p className="-mt-8 mb-10 text-center font-display text-xl tracking-[0.5em] text-gold">{p.titleHan}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.zones.map((z) => (
            <div key={z.name} className="rounded-lg border-2 border-gold/60 bg-cream p-6 text-center">
              <p className="text-lg font-bold uppercase text-navy">{z.name} <span className="font-normal text-gold">{z.nameHan}</span></p>
              <p className="mt-2 text-sm text-neutral-600">Giá từ</p>
              <p className="font-display text-2xl font-bold text-navy-dark">{z.price}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 mb-3 font-bold uppercase text-navy">{p.feeTitle}</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                {p.feeHeaders.map((h, i) => (
                  <th key={h} className={`border border-navy px-4 py-3 ${i === 0 ? "text-left" : "text-right"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.fees.map((row) => (
                <tr key={row[0]} className="odd:bg-cream">
                  {row.map((cell, i) => (
                    <td key={i} className={`border border-neutral-200 px-4 py-3 ${i === 0 ? "font-medium" : "text-right tabular-nums"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 mb-3 font-bold uppercase text-navy">{p.transferTitle}</h3>
        <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 text-sm">
          {p.transfers.map((t) => (
            <li key={t.name} className="flex justify-between gap-4 px-4 py-3">
              <span>{t.name} <span className="text-neutral-500">{t.nameHan}</span></span>
              <span className="font-medium tabular-nums text-navy">{t.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <MoreButton href="#lien-he" label="Liên hệ tư vấn chọn vị trí" />
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="dich-vu" className="pattern-bg scroll-mt-28 py-16 md:py-24">
      <div data-reveal className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Dịch vụ" title="Dịch vụ của chúng tôi" />
        <ServicesTabs />
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-navy-dark py-16 md:py-20">
      <div data-reveal className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Hình ảnh" title="Không gian thực tế" light />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {site.gallery.map((src, i) => (
            <div key={src + i} className={`relative overflow-hidden rounded ${i === 0 ? "col-span-2 row-span-2 h-64 md:h-full" : "h-40 md:h-52"}`}>
              <Image src={src} data-full={src} data-group="gallery" alt={`${site.name} - hình ${i + 1}`} fill sizes="(min-width: 768px) 380px, 50vw" className="object-cover transition duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section id="tin-tuc" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div data-reveal className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Tin tức" title="Tin tức & sự kiện" />
        <div className="grid gap-6 md:grid-cols-3">
          {site.news.map((n) => (
            <article key={n.title} className="group overflow-hidden rounded-lg border border-neutral-200 shadow-sm transition hover:shadow-lg">
              <div className="relative h-52 overflow-hidden">
                <Image src={n.image} data-full={n.image} data-group="news" alt={n.title} fill sizes="(min-width: 768px) 370px, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1.5 text-xs text-neutral-500"><CalendarDays className="size-3.5" /> {n.date}</p>
                <h3 className="mt-2 font-bold leading-snug text-navy group-hover:text-gold">{n.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  const c = site.cta;
  return (
    <section className="relative overflow-hidden py-20 text-center text-white">
      <Image src={c.image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy-dark/75" />
      <div data-reveal className="relative mx-auto max-w-3xl px-4">
        <Lotus className="mx-auto h-10 w-16 text-gold-light" />
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{c.title}</h2>
        <p className="mt-3 text-white/90">{c.body}</p>
        <a href="#lien-he" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium transition hover:bg-gold-light hover:text-navy-dark">
          Liên hệ tư vấn <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="lien-he" className="pattern-bg scroll-mt-28 py-16 md:py-24">
      <div data-reveal className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Liên hệ" title="Đăng ký tư vấn miễn phí" />
        <div className="grid gap-8 md:grid-cols-2">
          <ContactForm />
          <div className="overflow-hidden rounded-lg shadow">
            <iframe
              title="Bản đồ"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1.5fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">{site.about.body[0]}</p>
        </div>
        <div>
          <h3 className="mb-4 border-b border-gold/50 pb-2 font-bold uppercase text-white">Thông tin liên hệ</h3>
          <ul className="space-y-2.5 text-sm">
            <li className="font-medium text-white">{site.legalName}<br /><span className="font-normal text-white/70">MST: {site.taxId}</span></li>
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 text-gold-light" /> <span>Khu lưu trữ: {site.address}</span></li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 text-gold-light" /> {site.hotline ? <a href={`tel:${site.hotline.replace(/\s/g, "")}`} className="hover:text-gold-light">{site.hotline}</a> : "Đang cập nhật"}</li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 text-gold-light" /> {site.email ? <a href={`mailto:${site.email}`} className="hover:text-gold-light">{site.email}</a> : "Đang cập nhật"}</li>
            <li className="flex gap-2"><Clock className="size-4 shrink-0 text-gold-light" /> {site.workingHours}</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 border-b border-gold/50 pb-2 font-bold uppercase text-white">Liên kết</h3>
          <ul className="space-y-2 text-sm">
            {site.menu.map((m) => (
              <li key={m.href}><a href={m.href} className="hover:text-gold-light">{m.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © 2026 {site.name}. Thiết kế bởi NorvexSoft.
      </div>
    </footer>
  );
}
