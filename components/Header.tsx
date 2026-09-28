"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/liderlik-logo.png";
import { EXTERNAL, INSTAGRAM_URL, JOIN_URL, NAV_LINKS } from "@/lib/links";

function Wordmark() {
  return (
    <a href="#" className="flex min-h-[44px] items-center gap-3">
      <Image
        src={logo}
        alt="Liderlik Kulübü logosu"
        width={48}
        height={48}
        priority
        className="h-11 w-11 shrink-0 rounded-full bg-white sm:h-12 sm:w-12"
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.05rem] font-semibold tracking-[0.1em] text-paper sm:text-lg">
          LİDERLİK KULÜBÜ
        </span>
        <span className="mt-1 text-[0.7rem] text-paper/75 sm:text-xs">
          Eskişehir Osmangazi Üniversitesi
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Keep Tab inside the overlay while it's open.
      const items = dialogRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header className="on-dark sticky top-0 z-50 border-b border-paper/10 bg-navy-deep">
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Wordmark />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center px-3 text-[0.925rem] text-paper/85 transition-colors hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a href={JOIN_URL} {...EXTERNAL} className="btn btn-pulse">
                Kulübe Katıl
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobil-menu"
          className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-paper lg:hidden"
        >
          <span className="sr-only">Menüyü aç</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <path d="M3 7h18M3 12h18M3 17h12" stroke="currentColor" strokeWidth="1.75" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobil-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          ref={dialogRef}
          onClick={(e) => {
            // Tapping the empty backdrop (not a link) closes the menu.
            if (e.target === e.currentTarget) close();
          }}
          className="on-dark fixed inset-0 z-[60] flex flex-col bg-navy-deep lg:hidden"
        >
          <div className="flex h-[var(--header-h)] items-center justify-between border-b border-paper/10 px-4 sm:px-6">
            <Wordmark />
            <button
              type="button"
              onClick={close}
              className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-paper"
            >
              <span className="sr-only">Menüyü kapat</span>
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Mobil menü"
            className="flex-1 overflow-y-auto px-4 pb-10 pt-6 sm:px-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <ul className="border-t border-paper/15">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="border-b border-paper/15">
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center font-serif text-2xl font-light text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={JOIN_URL} {...EXTERNAL} onClick={() => setOpen(false)} className="btn btn-pulse mt-8 w-full">
              Kulübe Katıl
            </a>
            <a
              href={INSTAGRAM_URL}
              {...EXTERNAL}
              onClick={() => setOpen(false)}
              className="btn mt-3 w-full border-[1.5px] border-paper/70 text-paper"
            >
              Instagram&apos;da Takip Et
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
