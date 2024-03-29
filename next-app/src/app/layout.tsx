import type { Metadata } from "next";
import { Inter } from "next/font/google";

import EntryModal from "@/components/EntryModal";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";

import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-gray-100`}>
          <Navigation />
          <Toaster position="bottom-center" />
          <EntryModal />
          {children}
        </body>
      </html>
    </Providers>
  );
}
