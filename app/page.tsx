import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hakkimizda from "@/components/Hakkimizda";
import Hikayemiz from "@/components/Hikayemiz";
import SaglikYonetimiNedir from "@/components/SaglikYonetimiNedir";
import MisyonVizyon from "@/components/MisyonVizyon";
import ZamanCizelgesi from "@/components/ZamanCizelgesi";
import KapanisCTA from "@/components/KapanisCTA";
import Footer from "@/components/Footer";
import MobilKatilCubugu from "@/components/MobilKatilCubugu";

export default function Home() {
  return (
    <>
      <Header />
      <main id="icerik">
        <Hero />
        <Hakkimizda />
        <Hikayemiz />
        <SaglikYonetimiNedir />
        <MisyonVizyon />
        <ZamanCizelgesi />
        <KapanisCTA />
      </main>
      <Footer />
      <MobilKatilCubugu />
    </>
  );
}
