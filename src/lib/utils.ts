import type {
  ApartmentLayout,
  ApartmentMeta,
  FloorMeta,
  FloorUnitType,
} from "@/interfaces/structures.models";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isNestedPath = (path: string[]) =>
  path.filter((val) => val).length >= 2;

export function generateFloorDescription({
  floorNumber,
  roomCount,
  unitType,
  area,
}: FloorMeta): string {
  return `Floor ${floorNumber} includes ${roomCount} ${unitType} unit${
    roomCount > 1 ? "s, each" : ","
  } averaging ${area} in size. Designed for modern living, this layout balances comfort, functionality, and efficient use of space.`;
}

export function generateApartmentsForFloor({
  floorNumber,
  count = 3,
  unitType,
  area,
}: {
  floorNumber: number;
  count: number;
  unitType: FloorUnitType;
  area: string;
}): ApartmentLayout[] {
  return Array.from({ length: count }, (_, i) => {
    const roomCount = unitType === "1BHK" ? 1 : unitType === "2BHK" ? 2 : 3;

    return {
      id: `apt-${floorNumber}-${i + 1}`,
      apartmentNumber: `${floorNumber}0${i + 1}`,
      thumbnail: null,
      area,
      unitType,
      roomCount,
    };
  });
}

export function generateApartmentDescription({
  apartmentNumber,
  unitType,
  area,
  roomCount,
}: ApartmentMeta): string {
  const roomText = `${roomCount} ${roomCount > 1 ? "rooms" : "room"}`;
  const lifestyleTagline =
    roomCount > 1
      ? "perfect for discerning couples or refined family living"
      : "an exceptional choice for executives or solo professionals seeking style and substance";

  return `Apartment ${apartmentNumber} is an exquisitely crafted ${unitType} residence featuring ${roomText} within a generous ${area} of elegant interior space. Meticulously designed to reflect sophistication and modern luxury, this home delivers seamless integration of form and function. Expansive windows invite natural light throughout the living areas, highlighting premium finishes, clean architectural lines, and understated textures. Every detail — from the layout to the materials — is curated to enhance comfort, privacy, and elevated daily living. Whether hosting guests or enjoying tranquil solitude, residents benefit from a private sanctuary enriched by thoughtful spatial flow and upscale ambiance. ${lifestyleTagline}. Apartment ${apartmentNumber} represents a rare opportunity to experience refined urban living in a residence that redefines contemporary elegance.`;
}
