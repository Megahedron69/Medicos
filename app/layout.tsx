import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Providers } from "@/app/Utilities/providers";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Medicos",
  description:
    "Parse your unintelligible medical prescriptions and know the usage of all medicines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="medicos, medical prescriptions, medicine usage, healthcare"
        />
        <meta name="author" content="Medicos Team" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#008080" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Medicos" />
        <meta
          property="og:description"
          content="Parse your unintelligible medical prescriptions and know the usage of all medicines"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://i.imgur.com/WyKy7J9.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Medicos" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medicos" />
        <meta
          name="twitter:description"
          content="Parse your unintelligible medical prescriptions and know the usage of all medicines"
        />
        <meta name="twitter:image" content="https://i.imgur.com/WyKy7J9.png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com" />
        {/* Basic Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* Android/Chrome Icon */}
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />

        {/* Manifest for Progressive Web Apps (PWA) */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
