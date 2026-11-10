"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Send, X } from "lucide-react";
import { site } from "@/content/site";

export function HeroSlider() {
  const slides = site.hero;
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [index, slides.length]);

  return (
    <section className="relative h-[60vh] min-h-80 overflow-hidden md:h-[600px]" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <div
          key={s.image + i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image src={s.image} alt={s.title} fill sizes="100vw" className={`object-cover ${i === index ? "animate-kenburns" : ""}`} fetchPriority={i === 0 ? "high" : "auto"} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-16 px-4 text-center text-white">
            <h2 className="font-display text-3xl font-bold drop-shadow md:text-5xl">{s.title}</h2>
            <p className="mt-3 text-base text-white/90 md:text-lg">{s.subtitle}</p>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => go(index - 1)} aria-label="Ảnh trước" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-navy hover:bg-white">
        <ChevronLeft />
      </button>
      <button type="button" onClick={() => go(index + 1)} aria-label="Ảnh sau" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-navy hover:bg-white">
        <ChevronRight />
      </button>
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.image + i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ảnh ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold-light" : "w-2 bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const s = site.services[active];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist">
        {site.services.map((svc, i) => (
          <button
            key={svc.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded border px-4 py-2 text-sm transition ${i === active ? "border-navy bg-navy text-white" : "border-navy/40 bg-white text-navy hover:border-navy"}`}
          >
            {svc.name}
          </button>
        ))}
      </div>
      <div key={active} className="relative mt-6 h-80 overflow-hidden rounded-lg animate-in fade-in duration-500 md:h-[420px]" role="tabpanel">
        <Image src={s.image} data-full={s.image} data-group="services" alt={s.name} fill sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white md:p-10">
          <h3 className="font-display text-2xl font-bold md:text-3xl">{s.name}</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">{s.desc}</p>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow">
        <p className="font-display text-2xl text-navy">Cảm ơn quý khách!</p>
        <p className="mt-2 text-neutral-600">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-3 rounded-lg bg-white p-6 shadow"
      onSubmit={(e) => {
        e.preventDefault();
        // ponytail: demo only, chưa gửi đi đâu. Nối email/API khi làm bản thật.
        setSent(true);
      }}
    >
      <input required name="name" placeholder="Họ và tên *" className="w-full rounded border border-neutral-300 px-4 py-3 outline-none focus:border-navy" />
      <input required name="phone" type="tel" placeholder="Số điện thoại *" className="w-full rounded border border-neutral-300 px-4 py-3 outline-none focus:border-navy" />
      <input name="email" type="email" placeholder="Email" className="w-full rounded border border-neutral-300 px-4 py-3 outline-none focus:border-navy" />
      <textarea name="message" rows={4} placeholder="Nội dung cần tư vấn" className="w-full rounded border border-neutral-300 px-4 py-3 outline-none focus:border-navy" />
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded bg-navy px-4 py-3 font-medium text-white transition hover:bg-navy-dark">
        <Send className="size-4" /> Gửi yêu cầu tư vấn
      </button>
    </form>
  );
}

export function FloatingContact() {
  if (!site.zalo && !site.hotline) return null;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {site.zalo && (<a
        href={`https://zalo.me/${site.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="flex size-14 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg transition hover:scale-110"
      >
        <MessageCircle />
      </a>)}
      {site.hotline && (<a
        href={`tel:${site.hotline.replace(/\s/g, "")}`}
        aria-label="Gọi hotline"
        className="flex size-14 animate-pulse items-center justify-center rounded-full bg-gold text-white shadow-lg transition hover:scale-110"
      >
        <Phone />
      </a>)}
    </div>
  );
}

// Hiện dần từng mục khi cuộn tới. Không có JS thì mọi mục vẫn hiện bình thường.
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.documentElement.classList.add("js-reveal");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

// Bấm vào ảnh có data-full để xem ảnh lớn. Dùng <dialog> có sẵn của trình duyệt (Esc để đóng).
export function ImageZoom() {
  const ref = useRef<HTMLDialogElement>(null);
  const [list, setList] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-full]");
      if (!el || ref.current?.open) return;
      const group = el.dataset.group ?? "";
      const items = [
        ...new Set(
          [...document.querySelectorAll<HTMLElement>(`[data-full][data-group="${group}"]`)].map((x) => x.dataset.full ?? ""),
        ),
      ].filter(Boolean);
      setList(items);
      setIndex(Math.max(0, items.indexOf(el.dataset.full ?? "")));
      ref.current?.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const go = (n: number) => setIndex((n + list.length) % list.length);
  const many = list.length > 1;

  return (
    <dialog
      ref={ref}
      aria-label="Xem ảnh lớn"
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
      onKeyDown={(e) => {
        if (!many) return;
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center bg-transparent p-4 backdrop:bg-black/85 open:flex"
    >
      {list[index] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={list[index]} alt={`Ảnh ${index + 1}`} className="max-h-[88vh] max-w-full rounded object-contain shadow-2xl" />
      )}
      <button type="button" onClick={() => ref.current?.close()} aria-label="Đóng" className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-navy hover:bg-white">
        <X />
      </button>
      {many && (
        <>
          <button type="button" onClick={() => go(index - 1)} aria-label="Ảnh trước" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-navy hover:bg-white">
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Ảnh sau" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-navy hover:bg-white">
            <ChevronRight />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
            {index + 1} / {list.length}
          </p>
        </>
      )}
    </dialog>
  );
}
