import type { Metadata } from "next";
import Script from "next/script";
import { salon } from "@/content";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parrucchiere a Sant'Ambrogio di Torino – I Giarratano Parrucchieri | Taglio, Colore, Piega",
  description: "Consulenza personalizzata, tagli e colore su misura. Prenota su WhatsApp. Corso Moncenisio 56/A, 10057",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: salon.name,
            telephone: salon.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: salon.address.split(",")[0],
              addressLocality: salon.city,
              postalCode: "10057",
              addressCountry: "IT",
            },
            openingHours: [
              "Tu-We 09:00-12:30",
              "Tu-We 14:30-18:30",
              "Th 09:00-18:30",
              "Fr-Sa 08:30-18:30",
            ],
            hasMap: salon.maps,
            sameAs: [salon.instagram],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
