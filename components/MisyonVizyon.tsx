import Pulse from "./Pulse";
import { Corners } from "./Frame";

const panolar = [
  {
    baslik: "Misyonumuz",
    metin:
      "Sağlık Yönetimi öğrencilerinin akademik, mesleki, sosyal ve kişisel gelişimlerini desteklemek; onları sektörle ve alanında deneyimli profesyonellerle buluşturmak; liderlik, iletişim, ekip çalışması ve kariyer becerilerini geliştirebilecekleri fırsatlar oluşturmak.",
  },
  {
    baslik: "Vizyonumuz",
    metin:
      "Sağlık Yönetimi alanında üreten, araştıran, sorgulayan, liderlik eden ve geleceğin sağlık sistemine değer katabilecek öğrencilerin yetişmesine katkı sağlayan; üniversitemiz ve sağlık sektörü arasında güçlü bağlar kuran aktif ve sürdürülebilir bir öğrenci topluluğu olmak.",
  },
];

export default function MisyonVizyon() {
  return (
    <section
      id="misyon-vizyon"
      aria-labelledby="mv-baslik"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="mv-baslik" className="sr-only">
          Misyon ve Vizyon
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {panolar.map((p) => (
            <article key={p.baslik} className="panel flex flex-col px-6 py-10 sm:px-10 sm:py-12">
              <Corners />
              <h3 className="font-serif text-3xl font-semibold text-navy sm:text-[2.25rem]">
                {p.baslik}
              </h3>
              <Pulse className="mt-5" />
              <p className="mt-7 text-[1.05rem] leading-relaxed text-ink/90">{p.metin}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
