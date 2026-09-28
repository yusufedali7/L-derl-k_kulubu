import { EXTERNAL, INSTAGRAM_URL, JOIN_URL } from "@/lib/links";

const sloganlar = ["Birlikte öğreniyoruz.", "Birlikte gelişiyoruz.", "Birlikte geleceğe hazırlanıyoruz."];

export default function KapanisCTA() {
  return (
    <section
      aria-labelledby="kapanis-baslik"
      className="on-dark bg-navy px-4 py-20 text-center text-paper sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="kapanis-baslik" className="font-serif text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
          Geleceğe Birlikte
        </h2>
        <div className="mx-auto mt-8 max-w-prose space-y-5 text-[1.05rem] leading-relaxed text-paper/85">
          <p>Gerçekleştirdiğimiz her etkinliği bir sonraki adımın başlangıcı olarak görüyoruz.</p>
          <p>
            Önümüzdeki dönemde akademik gelişimimizi destekleyen, kariyerimize katkı sağlayan,
            CV&apos;mizi güçlendiren ve sosyal bağlarımızı geliştiren daha birçok etkinlikle
            yolculuğumuza devam edeceğiz.
          </p>
          <p className="font-serif text-xl font-normal leading-relaxed text-paper sm:text-[1.35rem]">
            Çünkü bizim için liderlik, bir koltukta oturmak değil; sorumluluk almak, öğrenmek,
            paylaşmak ve birlikte geleceği şekillendirmektir.
          </p>
        </div>

        <ul className="mx-auto mt-12 max-w-md">
          {sloganlar.map((s) => (
            <li
              key={s}
              className="border-t border-pulse/70 py-4 font-serif text-xl font-light last:border-b sm:text-2xl"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={JOIN_URL} {...EXTERNAL} className="btn btn-pulse w-full min-w-[220px] sm:w-auto">
            Kulübe Katıl
          </a>
          <a
            href={INSTAGRAM_URL}
            {...EXTERNAL}
            className="btn w-full min-w-[220px] border-[1.5px] border-paper/70 text-paper hover:bg-paper hover:text-navy sm:w-auto"
          >
            Instagram&apos;da Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}
