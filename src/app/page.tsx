import { Header } from "@/components/sites/demo/Header";
import { FloatingContact, HeroSlider, ImageZoom, ScrollReveal } from "@/components/sites/demo/Interactive";
import { About, Contact, CtaBanner, Footer, Gallery, News, Pricing, Products, Services } from "@/components/sites/demo/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Products />
        <Pricing />
        <Services />
        <Gallery />
        <News />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollReveal />
      <ImageZoom />
    </>
  );
}
