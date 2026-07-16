import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camper details | RoadNest",
  description: "View detailed information, specifications and reviews for this camper.",
};

export default function CamperLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
