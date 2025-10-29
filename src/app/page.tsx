import { CallToAction } from '@/sections/CallToAction';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Pricing } from '@/sections/Pricing';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Testimonials } from '@/sections/Testimonials';
import Services from '@/sections/Services';
import Stats from '@/sections/Stats';
import About from '@/sections/About';
import Features from '@/sections/Features';
import PricingNew from '@/sections/PricingNew';
import Nomisscalls from '@/sections/Nomisscalls';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Stats />
      {/* <LogoTicker /> */}
      {/* <ProductShowcase /> */}
      <About />
      <Features />
      <PricingNew />
      {/* <Pricing /> */}
      <Nomisscalls />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
