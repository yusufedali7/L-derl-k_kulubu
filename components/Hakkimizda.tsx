import Pulse from "./Pulse";
import { Corners } from "./Frame";

export default function Hakkimizda() {
  return (
    <section id="hakkimizda" aria-labelledby="hakkimizda-baslik" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="panel mx-auto max-w-5xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
        <Corners />
        <h2 id="hakkimizda-baslik" className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Hakkımızda
        </h2>
        <Pulse className="mt-5" />
        <p className="mt-8 max-w-prose font-serif text-xl font-light leading-[1.6] text-ink sm:text-[1.4rem]">
          Biz, üniversite hayatının yalnızca derslerden ibaret olmadığına inanıyoruz. Bir konferansta
          yeni bir bakış açısı kazanmanın, bir sektör profesyonelinden deneyim dinlemenin, birlikte
          üretilen bir projede sorumluluk almanın veya aynı masada sohbet ederek yeni bir arkadaşlık
          kurmanın da eğitimin bir parçası olduğuna inanıyoruz.
        </p>
        <p className="mt-10 border-t border-line pt-8 font-serif text-2xl font-semibold leading-snug text-navy sm:text-[2rem]">
          Öğreniyor, deneyimliyor, üretiyor ve birlikte büyüyoruz.
        </p>
      </div>
    </section>
  );
}
