export type GalleryImage = string;

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  image?: string;
  gallery: GalleryImage[];

  reviews?: unknown[];

  transmission?: string;
  engine?: string;
  form?: string;

  length?: string;
  width?: string;
  height?: string;

  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
};

export type CamperPage = {
  items: Camper[];
  total: number;
};

export type CamperFilters = {
  location?: string;
  form?: string;
  features: string[];
};
