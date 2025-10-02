import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MenoDAO - Brightening Smiles, Empowering Communities",
  description: "Non-profit organization providing quality dentistry and dental services to underserved communities in Kenya and East Africa through blockchain DAO donations and dental insurance.",
  keywords: "dental care, Kenya, East Africa, blockchain, DAO, dental insurance, community health",
  authors: [{name: "Caleb Kiragu"},{ name: "Dr. Said Athman" }],
  openGraph: {
    title: "MenoDAO - Brightening Smiles, Empowering Communities",
    description: "Providing quality dental care to underserved communities in Kenya and East Africa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
