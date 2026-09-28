import Pulse from "./Pulse";

export default function Hikayemiz() {
  return (
    <section aria-labelledby="hikayemiz-baslik" className="border-t border-line px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2 id="hikayemiz-baslik" className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Hikâyemiz
          </h2>
          <p
            className="mt-4 font-serif text-[7rem] font-semibold leading-[0.9] tracking-[-0.04em] text-navy sm:text-[10rem] lg:text-[12rem]"
          >
            2018
          </p>
          <Pulse className="mt-6" />
        </div>
        <div className="max-w-prose space-y-5 text-[1.05rem] leading-relaxed text-ink/90 md:col-span-7 md:pt-3">
          <p>
            2018 yılında kurulan Liderlik Kulübü, yıllar içerisinde farklı yönetimlerin katkılarıyla
            büyüyerek Sağlık Yönetimi öğrencilerinin akademik, sosyal ve mesleki gelişimine katkı
            sağlayan bir topluluk haline geldi.
          </p>
          <p>
            2025 yılında görevi devralan yeni yönetim olarak, kulübümüzün geçmişten gelen birikimini
            koruyarak çalışmalarımıza yeni bir vizyonla devam ediyoruz.
          </p>
          <p>
            2025&apos;ten bu yana gerçekleştirdiğimiz sosyal buluşmalar, konferanslar, kariyer
            etkinlikleri ve sektör profesyonelleriyle gerçekleştirdiğimiz buluşmalarla kulübümüzü daha
            aktif ve güçlü bir yapıya taşımayı hedefliyoruz.
          </p>
          <p className="pt-2 font-serif text-xl font-normal text-navy">
            Geçmişten aldığımız güçle, geleceğe birlikte ilerliyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
