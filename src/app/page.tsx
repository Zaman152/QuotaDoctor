import Hero from "@/components/sections/Hero";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import MeetYourTeam from "@/components/sections/MeetYourTeam";
import WhyQuotaDoctor from "@/components/sections/WhyQuotaDoctor";
import HowItWorks from "@/components/sections/HowItWorks";
import MeetDave from "@/components/sections/MeetDave";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <MeetYourTeam />
      <WhyQuotaDoctor />
      <HowItWorks />
      <MeetDave />
      <ContactForm />
    </>
  );
}
