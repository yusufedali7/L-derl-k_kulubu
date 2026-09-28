const alanlar = [
  "Hastaneler",
  "Kamu kurumları",
  "Özel sağlık kuruluşları",
  "Sağlık sigortacılığı",
  "Kalite ve insan kaynakları",
  "Sağlık politikaları",
];

export default function SaglikYonetimiNedir() {
  return (
    <section
      id="saglik-yonetimi"
      aria-labelledby="sy-baslik"
      className="on-dark bg-navy-deep px-4 py-20 text-paper sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:gap-12">
        <h2
          id="sy-baslik"
          className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:col-span-4 lg:text-[2.75rem]"
        >
          Sağlık Yönetimi Nedir?
        </h2>

        <div className="mt-8 max-w-prose md:col-span-8 md:mt-1">
          <p className="font-serif text-xl font-light leading-[1.55] sm:text-2xl">
            Sağlık Yönetimi, sağlık hizmetlerinin etkili, kaliteli, sürdürülebilir ve insan odaklı
            şekilde yönetilmesini sağlayan multidisipliner bir alandır.
          </p>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-paper/85">
            Bir sağlık kurumunun yalnızca tıbbi hizmetlerden oluşmadığını; arka planda güçlü bir
            yönetim, insan kaynağı, finans, kalite, organizasyon, iletişim ve stratejik planlama
            gerektirdiğini ele alır.
          </p>

          <h3 className="sr-only">Kariyer alanları</h3>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {alanlar.map((a) => (
              <li
                key={a}
                className="rounded-full border border-paper/35 bg-paper/10 px-4 py-2 text-[0.95rem] font-medium text-paper"
              >
                {a}
              </li>
            ))}
          </ul>

          <p className="mt-10 border-l-2 border-pulse pl-5 font-serif text-lg font-normal leading-relaxed text-paper sm:text-xl">
            Biz ise bu yolculuğun yalnızca sınıfta değil, hayatın içinde de öğrenilmesi gerektiğine
            inanıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
