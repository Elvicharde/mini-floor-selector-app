export interface Tower {
  id: string;
  title: string;
  imageUrl: string | null;
  floors?: number;
  description?: string;
  location?: {
    address: string;
    city: string;
    district: string;
    coordinates: { lat: number; lng: number };
  };
}

export type FloorUnitType = "1BHK" | "2BHK" | "3BHK";

export interface FloorLayout {
  id: string;
  floorNumber: number;
  thumbnail: string | null;
  area: string;
  unitType: FloorUnitType;
  roomCount: number;
}

export type ApartmentLayout = Omit<FloorLayout, "floorNumber"> & {
  apartmentNumber: string;
};

export type FloorMeta = Omit<FloorLayout, "id" | "thumbnail">;
export type ApartmentMeta = Omit<ApartmentLayout, "id" | "thumbnail">;

export interface Apartment {}
