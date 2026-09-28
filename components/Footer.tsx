"use client";

import Image from "next/image";
import logo from "@/public/images/liderlik-logo.png";
import { EXTERNAL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/links";

export default function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer
      id="iletisim"
      className="on-dark bg-navy-deep px-4 pb-28 pt-14 text-paper sm:px-6 md:pb-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Liderlik Kulübü logosu"
              width={72}
              height={72}
              className="h-16 w-16 rounded-full bg-white"
            />
            <p className="font-serif text-lg font-semibold tracking-[0.1em]">LİDERLİK KULÜBÜ</p>
          </div>
          <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-paper/80">
            Liderlik Kulübü — Eskişehir Osmangazi Üniversitesi Sağlık Yönetimi öğrenci topluluğu ·
            2018&apos;den beri
          </p>
        </div>

        <ul className="flex gap-2" aria-label="İletişim">
          <li>
            <a
              href={INSTAGRAM_URL}
              {...EXTERNAL}
              className="inline-flex h-12 w-12 items-center justify-center border border-paper/25 transition-colors hover:border-pulse hover:text-pulse"
            >
              <span className="sr-only">Instagram</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              {...EXTERNAL}
              className="inline-flex h-12 w-12 items-center justify-center border border-paper/25 transition-colors hover:border-pulse hover:text-pulse"
            >
              <span className="sr-only">WhatsApp topluluk grubu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4.5 19.5l1.1-3.6A7.8 7.8 0 1 1 8.4 18.6z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.3 8.6c.2-.4.5-.4.8-.4l.5.1.8 1.8c0 .2 0 .4-.2.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.6c.2-.2.4-.2.6-.1l1.7.8c.1.4 0 1-.4 1.3-.5.5-1.4.6-2.3.3-2-.7-3.8-2.5-4.5-4.4-.3-.9-.2-1.9.4-2.5z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-paper/15 pt-6 text-xs text-paper/70">
        © <span suppressHydrationWarning>{yil}</span> Liderlik Kulübü
      </p>
    </footer>
  );
}
