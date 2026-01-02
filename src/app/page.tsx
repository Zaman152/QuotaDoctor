import { CallToAction } from '@/sections/CallToAction';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import Method from '@/sections/Method';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Testimonials } from '@/sections/Testimonials';
import Services from '@/sections/Services';
import Stats from '@/sections/Stats';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Nomisscalls from '@/sections/Nomisscalls';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      {/* <Method /> */}
      <Stats />
      {/* <LogoTicker /> */}
      {/* <ProductShowcase /> */}
      <About />
      {/*<Features /> */}
      {/* <Pricing /> */}
      <Nomisscalls />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
