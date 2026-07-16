import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "TravelTrucks RoadNest — Camper rentals",
  description: "Find a camper for your next adventure.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <Loader />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
