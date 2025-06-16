import type { FloorLayout, Tower } from "@/interfaces/structures.models";

export const towersData: Tower[] = [
  {
    id: "tower-a",
    title: "Tower A",
    imageUrl: null,
    // imageUrl: "/assets/tower-a.jpg",
    floors: 20,
    description:
      "Modern and efficient, Tower A offers 20 floors of sleek residential living with bay views, smart amenities, and eco-conscious design. Ideal for professionals and small families, it’s located near parks, cafes, and transit in the vibrant South Beach district — blending convenience, style, and urban energy effortlessly.",
    location: {
      address: "86 Marina Blvd, San Francisco, CA",
      city: "San Francisco",
      district: "South Beach",
      coordinates: { lat: 37.7936, lng: -122.393 },
    },
  },
  {
    id: "tower-b",
    title: "Tower B",
    imageUrl: null,
    // imageUrl: "/assets/tower-b.jpg",
    floors: 15,
    description:
      "Tower B is a 15-floor, family-friendly mid-rise in Midtown Manhattan, designed for comfort and space. Featuring wide units, a play area, and green spaces, it's perfect for growing households. Just steps from Central Park and cultural hotspots, it offers city living with a touch of calm.",
    location: {
      address: "35 West 57th St, New York, NY",
      city: "New York",
      district: "Midtown Manhattan",
      coordinates: { lat: 40.7645, lng: -73.9775 },
    },
  },
  {
    id: "tower-c",
    title: "Tower C",
    imageUrl: null,
    // imageUrl: "/assets/tower-c.jpg",
    floors: 25,
    description:
      "Luxury meets waterfront living at Tower C — a 25-story high-rise with panoramic views, smart home features, and top-tier amenities. Located in Singapore’s Harbourfront, it's ideal for executives and modern homeowners seeking elegance, convenience, and leisure just minutes from Sentosa, VivoCity, and the marina.",
    location: {
      address: "1 Harbourfront Ave, Singapore 098632",
      city: "Singapore",
      district: "Harbourfront",
      coordinates: { lat: 1.2645, lng: 103.8223 },
    },
  },
];

export const floorLayouts: FloorLayout[] = Array.from(
  { length: 15 },
  (_, i) => {
    const floor = 15 - i; // Floors from 15 down to 1
    return {
      id: `floor-${floor}`,
      floorNumber: floor,
      thumbnail: null, // Replace with real path if needed
      area: `${80 + floor * 2} sqm`,
      unitType: floor % 3 === 0 ? "3BHK" : floor % 2 === 0 ? "2BHK" : "1BHK",
      roomCount: floor % 3 === 0 ? 3 : floor % 2 === 0 ? 2 : 1,
    };
  }
);


