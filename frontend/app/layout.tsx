import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escuela de Educación Técnica N° 3117 Maestro Daniel Óscar Reyes",
  description: "Sistema de Inscripción Virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col gap-8`}
      >
        <Header />
        <main className="grow container mx-auto border border-neutral-200 rounded-lg p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
