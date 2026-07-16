import type { VehicleType } from "@/types/camper";
import { formatLabel } from "./formatLabel";

export function getVehicleType(type: VehicleType): string {
  return formatLabel(type);
}
