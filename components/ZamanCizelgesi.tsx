"use client";

import Pulse from "./Pulse";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Photo } from "./Frame";
import { img } from "@/lib/images";

type Media = { photo: (typeof img)[keyof typeof img]; aspect?: string; wide?: boolean };

type Etkinlik = {
  baslik: string;
  tarih?: string;
  metin: string;
  medya: Media[];
  /** Narrow single images (e.g. the tall festival collage) so they don't dominate. */
  dar?: boolean;
};

const yillar: { yil: string; etkinlikler: Etkinlik[] }[] = [
  {
    yil: "2025",
    etkinlikler: [
      {
        baslik: "Tanışma Etkinliği",
        tarih: "02 Ekim 2025",
        metin:
          "Yeni öğrencilerle tanıştık, oyunlar oynadık ve kulüp olarak ilk bağlarımızı kurduk.",
        medya: [{ photo: img.tanisma }],
      },
      {
        baslik: "Mangal Etkinliği",
        metin:
          "Sosyalleştik, sohbet ettik, oyunlar oynadık ve birlikte keyifli zaman geçirdik.",
        medya: [
          { photo: img.mangalSohbet, aspect: "aspect-[3/4]" },
          { photo: img.mangalOyun, aspect: "aspect-[3/4]" },
        ],
      },
      {
        baslik: "Hekim Perspektifinden Sağlık Yönetimi",
        tarih: "18 Aralık 2025",
        metin:
          "Sağlık İdarecileri Günü kapsamında Başkent Üniversitesi'nin düzenlediği konferansa katılarak alanında uzman isimleri dinledik ve sağlık yönetimine farklı perspektiflerden bakma fırsatı bulduk.",
        medya: [
          { photo: img.hekimKonferans, aspect: "aspect-[4/3]" },
          { photo: img.kulupLobi, aspect: "aspect-[4/3]" },
        ],
      },
    ],
  },
  {
    yil: "2026",
    etkinlikler: [
      {
        baslik: "Yönetici Koltuğundan Hikâyeler",
        tarih: "26 Mart 2026",
        metin:
          "Sağlık sektörünün farklı kademelerinde görev yapan profesyonelleri ağırladık; kariyer yolculuklarını, liderlik deneyimlerini ve iş hayatındaki tecrübelerini dinledik.",
        medya: [],
      },
      {
        baslik: "Kariyer Buluşması",
        metin:
          "Acıbadem Kariyer'den İşe Alım Sorumlusu Gamze Ece Kat ve Hasta Hizmetleri Müdürü Derya Uca'yı okulumuzda ağırladık. Kariyer planlaması, işe alım süreçleri, mülakatlarda dikkat edilmesi gerekenler ve kurumların adaylardan beklentileri hakkında bilgi edindik.",
        medya: [
          { photo: img.acibademKucuk, aspect: "aspect-[4/3]" },
          { photo: img.acibademGenis, aspect: "aspect-[4/3]" },
        ],
      },
      {
        baslik: "YeşilayFest",
        metin:
          "Kulübümüzü tanıttığımız standımızla farklı bölümlerden öğrencilerle bir araya geldik; oyunlar, aktiviteler ve sohbetlerle sosyal bağlarımızı güçlendirdik.",
        medya: [{ photo: img.yesilayfest }],
        dar: true,
      },
      {
        baslik: "Sağlık Bilimleri Dekanlar Konseyi 19. Genel Kurul Toplantısı",
        metin:
          "Genel Kurul Toplantısı kapsamında Liderlik Kulübü olarak standımızı açarak kulübümüzü ve çalışmalarımızı tanıtma fırsatı bulduk. Farklı akademik çevrelerden katılımcılarla bir araya gelerek kulübümüzün faaliyetlerini paylaştık.",
        medya: [
          { photo: img.dekanlar1, wide: true },
          { photo: img.dekanlar2, aspect: "aspect-[4/3]" },
          { photo: img.sabdek, aspect: "aspect-[4/3]" },
        ],
      },
    ],
  },
];

function Galeri({ medya, dar }: { medya: Media[]; dar?: boolean }) {
  if (medya.length === 0) return null;
  if (medya.length === 1) {
    const m = medya[0];
    return (
      <div className={`mt-6 ${dar ? "max-w-[22rem]" : "max-w-2xl lg:max-w-3xl"}`}>
        <Photo
          src={m.photo.src}
          alt={m.photo.alt}
          aspect={m.aspect}
          sizes={dar ? "(min-width: 640px) 352px, 85vw" : "(min-width: 1024px) 768px, 85vw"}
        />
      </div>
    );
  }
  return (
    <div className="mt-6 grid max-w-2xl lg:max-w-3xl grid-cols-2 gap-3 sm:gap-4">
      {medya.map((m) => (
        <Photo
          key={m.photo.alt}
          src={m.photo.src}
          alt={m.photo.alt}
          aspect={m.aspect}
          className={m.wide ? "col-span-2" : ""}
          sizes={m.wide ? "(min-width: 1024px) 768px, 85vw" : "(min-width: 1024px) 380px, 43vw"}
        />
      ))}
    </div>
  );
}

export default function ZamanCizelgesi() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="etkinlikler"
      aria-labelledby="etkinlikler-baslik"
      className="border-t border-line px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="etkinlikler-baslik"
          className="font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-[2.75rem]"
        >
          Neler Yaptık?
        </h2>
        <Pulse className="mt-5" />

        {/* Spine sits at x=12px on mobile, in the gutter between year column and content on md+. */}
        <div ref={ref} className="relative mt-14 pl-10 md:pl-0">
          <div aria-hidden className="absolute bottom-0 left-3 top-0 w-px bg-line md:left-[184px]" />
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-3 top-0 w-px origin-top bg-pulse md:left-[184px]"
            style={{ scaleY: reduce ? 1 : fill }}
          />

          {yillar.map(({ yil, etkinlikler }) => (
            <div key={yil} className="relative pb-6 md:grid md:grid-cols-[160px_1fr] md:gap-x-12">
              <h3 className="relative mb-8 font-serif text-4xl font-semibold text-navy md:sticky md:top-28 md:mb-0 md:self-start md:text-right md:text-5xl">
                <span
                  aria-hidden
                  className="absolute -left-[35px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 border-2 border-pulse bg-paper md:left-auto md:-right-[32px]"
                />
                {yil}
              </h3>

              <ol className="space-y-14 pb-10 md:space-y-20 md:pt-20">
                {etkinlikler.map((e) => (
                  <li key={e.baslik} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[33px] top-[0.55rem] h-[11px] w-[11px] rotate-45 bg-navy md:-left-[29px]"
                    />
                    {e.tarih && (
                      <p className="mb-2">
                        <time className="sticker tabular-nums">{e.tarih}</time>
                      </p>
                    )}
                    <h4 className="mt-1 max-w-[32ch] font-serif text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
                      {e.baslik}
                    </h4>
                    <p className="mt-3 max-w-prose leading-relaxed text-ink/85">{e.metin}</p>
                    <Galeri medya={e.medya} dar={e.dar} />
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
