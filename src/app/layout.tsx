import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import dynamic from 'next/dynamic';

const ChatbotClient = dynamic(() => import('@/components/ChatbotClient'), {
  ssr: false,
  loading: () => null
});

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuotaDoctor — Fix the System, Elevate the Reps, Scale the Revenue",
  description:
    "QuotaDoctor provides fractional VP sales leadership, AI-driven diagnostics, coaching, and end-to-end sales automation to scale revenue for B2B and SaaS companies.",
  applicationName: "QuotaDoctor",
  openGraph: {
    title: "QuotaDoctor",
    description: "Fix the System, Elevate the Reps, Scale the Revenue",
    siteName: "QuotaDoctor",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuotaDoctor",
    description: "Fix the System, Elevate the Reps, Scale the Revenue",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#050505] text-white relative overflow-x-hidden")}>
        {/* Global Premium Grid Background */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(15,76,117,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,76,117,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[-1]" />

        <ChatbotClient />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QuotaDoctor",
              slogan: "Fix the System, Elevate the Reps, Scale the Revenue",
              url: "https://www.quotadoctor.com",
              sameAs: [],
              logo: "/logo.png",
              description:
                "QuotaDoctor provides fractional VP sales leadership, AI-powered diagnostics, coaching, and full sales operating systems for B2B and SaaS companies.",
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
        />
        {children}
      </body>
    </html>
  );
}
