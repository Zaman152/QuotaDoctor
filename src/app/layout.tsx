import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import {twMerge} from "tailwind-merge";
import dynamic from 'next/dynamic';

const ChatbotClient = dynamic(() => import('@/components/ChatbotClient'), { 
  ssr: false,
  loading: () => null 
});

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eclipse Technologies — Illuminating Innovation, Eclipsing Expectations",
  description:
    "Eclipse Technologies delivers mobile and web development, cloud consultancy, advanced technologies, AI voice agents, RAG systems, AI chatbots, graphic design, and ebook development.",
  applicationName: "Eclipse Technologies",
  openGraph: {
    title: "Eclipse Technologies",
    description: "Illuminating Innovation, Eclipsing Expectations",
    siteName: "Eclipse Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eclipse Technologies",
    description: "Illuminating Innovation, Eclipsing Expectations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <ChatbotClient />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Eclipse Technologies",
              slogan: "Illuminating Innovation, Eclipsing Expectations",
              url: "https://www.example.com",
              sameAs: [],
              logo: "/logo.png",
              description:
                "Eclipse Technologies provides mobile and web development, cloud consultancy, advanced technologies, AI voice agents, RAG systems, AI chatbots, graphic design, and ebook development.",
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Mobile App Development" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Web Development" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Cloud Consultancy" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Graphic Design" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Ebook Development" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Advanced Technologies" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "AI Voice Agents" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "RAG (Retrieval-Augmented Generation) Systems" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "AI Chatbots" },
                },
              ],
            }),
          }}
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
