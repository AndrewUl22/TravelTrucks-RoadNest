import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog | RoadNest",
  description:
    "Browse our camper catalog and filter by vehicle type and amenities to find your perfect campervan.",
};

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
