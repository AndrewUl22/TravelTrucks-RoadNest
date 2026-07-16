// Amenity types
export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

// Vehicle type
export type VehicleType =
  | "van"
  | "semi-integrated"
  | "fully-integrated"
  | "alcove";

// Review type
export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

// Base Camper (list item)
export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: VehicleType;
  length: string;
  width: string;
  height: string;
  tank?: string;
  consumption?: string;
  transmission: string;
  engine: string;
  gallery: string[];
  amenities: Amenity[];
}

// CamperDetails (full camper page)
export interface CamperDetails extends Camper {
  // можно добавлять сюда новые поля, если API вернёт больше данных
}

// Фильтры каталога
export interface CampersFilters {
  location?: string;
  form?: VehicleType;
  engine?: string;
  transmission?: string;
}

// Ответ списка кемперов
export interface CampersListResponse {
  campers: Camper[];
  total: number;
}

// Ответ фильтров
export interface FiltersResponse {
  forms: VehicleType[];
  engines: string[];
  transmissions: string[];
}

// Бронирование
export interface BookingRequestPayload {
  name: string;
  email: string;
  bookingDate: string;
  comment?: string;
}

export interface BookingRequestResponse {
  id: string;
  camperId: string;
  status: "pending" | "confirmed" | "rejected";
}
