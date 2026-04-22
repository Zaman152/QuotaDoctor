import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuotaDoctor — Never Miss Another Lead",
  description:
    "QuotaDoctor gives small businesses a 24/7 AI team that answers every call, captures every lead, and runs your marketing — for less than one part-time hire.",
  applicationName: "QuotaDoctor",
  keywords: [
    "AI receptionist",
    "small business marketing",
    "lead capture",
    "24/7 answering",
    "home services",
    "HVAC",
    "plumbing",
    "dental marketing",
  ],
  openGraph: {
    title: "QuotaDoctor — Never Miss Another Lead",
    description:
      "We give small businesses a 24/7 team that answers every call, captures every lead, and runs your marketing — for less than one part-time hire.",
    siteName: "QuotaDoctor",
    type: "website",
    locale: "en_US",
    url: "https://www.quotadoctor.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuotaDoctor — Never Miss Another Lead",
    description:
      "We give small businesses a 24/7 team that answers every call, captures every lead, and runs your marketing — for less than one part-time hire.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className="font-inter antialiased bg-white text-[#333333] overflow-x-hidden"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "QuotaDoctor",
              description:
                "QuotaDoctor gives small businesses a 24/7 AI workforce that answers every call, captures every lead, and manages marketing automatically.",
              url: "https://www.quotadoctor.ai",
              telephone: "720-606-2741",
              email: "Dave@quotadoctor.ai",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denver",
                addressRegion: "CO",
                addressCountry: "US",
              },
              sameAs: [
                "https://linkedin.com/in/david-thompson-720",
                "https://instagram.com/quotadoctorai/",
                "https://facebook.com/profile.php?id=61585199853574",
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
