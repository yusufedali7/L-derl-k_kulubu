"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Photo } from "./Frame";
import Pulse from "./Pulse";
import { img } from "@/lib/images";
import { EXTERNAL, JOIN_URL } from "@/lib/links";

// Desktop: overlapping, slightly rotated collage. Mobile: swipeable scroll-snap strip.
const collage = [
  {
    photo: img.kulupStandi,
    place: "lg:absolute lg:left-0 lg:top-0 lg:w-[50%] lg:z-10",
    tilt: "lg:-rotate-2",
  },
  {
    photo: img.yesilayfest,
    place: "lg:absolute lg:right-0 lg:top-12 lg:w-[40%] lg:z-20",
    tilt: "lg:rotate-[1.5deg]",
  },
  {
    photo: img.acibademKucuk,
    place: "lg:absolute lg:bottom-0 lg:left-[12%] lg:w-[62%] lg:z-30",
    tilt: "lg:-rotate-1",
  },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="hero-baslik" className="overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-6 lg:self-center xl:col-span-6">
          <h1
            id="hero-baslik"
            className="font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] text-navy sm:text-[3.25rem] lg:text-[3.9rem] xl:text-[4.4rem]"
          >
            Geleceğin sağlık yöneticileri, bugünden birlikte yetişiyor.
          </h1>
          <Pulse variant="long" draw className="mt-6" />
          <p className="mt-5 max-w-[60ch] text-[1.05rem] leading-relaxed text-ink/85 sm:text-lg">
            Liderlik Kulübü; Sağlık Yönetimi öğrencilerinin akademik bilgilerini deneyimle
            buluşturduğu, sektörü yakından tanıdığı, kariyer yolculuklarına yön verdiği ve güçlü
            sosyal bağlar kurduğu bir öğrenci topluluğudur.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={JOIN_URL} {...EXTERNAL} className="btn btn-pulse">
              Kulübe Katıl
            </a>
            <a href="#etkinlikler" className="btn btn-outline">
              Etkinliklerimizi Gör
            </a>
          </div>
        </div>

        <div className="-mx-4 sm:-mx-6 lg:col-span-6 lg:mx-0 lg:pl-6 xl:pl-10">
          <ul
            aria-label="Etkinliklerimizden kareler"
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 pt-4 lg:relative lg:block lg:h-[600px] lg:overflow-visible lg:p-0 xl:h-[640px]"
          >
            {collage.map(({ photo, place, tilt }, i) => (
              <motion.li
                key={photo.alt}
                className={`w-[72%] shrink-0 snap-center sm:w-[44%] ${place}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`tape relative ${tilt}`}>
                  <Photo
                    src={photo.src}
                    alt={photo.alt}
                    aspect="aspect-[4/5] lg:aspect-auto"
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 44vw, 72vw"
                    priority
                    className="shadow-[0_1px_2px_rgb(28_35_33/0.08),0_12px_28px_-14px_rgb(28_35_33/0.35)]"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
