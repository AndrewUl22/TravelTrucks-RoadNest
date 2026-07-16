import type { Amenity } from "@/types/camper";
import { formatLabel } from "./formatLabel";
import { getAmenityIcon } from "./amenityIcons";

export interface FeatureItem {
  key: Amenity;
  label: string;
  icon: any;
}

export function getFeatures(amenities: Amenity[]): FeatureItem[] {
  return amenities.map((amenity) => ({
    key: amenity,
    label: formatLabel(amenity),
    icon: getAmenityIcon(amenity),
  }));
}
