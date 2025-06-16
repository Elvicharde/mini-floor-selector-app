import { useParams } from "react-router-dom";
import { floorLayouts } from "@/services/seeds/sample-data";
import {
  generateApartmentDescription,
  generateApartmentsForFloor,
} from "@/lib/utils";
import type { ApartmentLayout } from "@/interfaces/structures.models";
import { Card } from "@/components/shared/card";

const ApartmentDetails = () => {
  const { floorId, apartmentId } = useParams<{
    apartmentId: string;
    floorId: string;
  }>();

  const floor = floorLayouts.find((f) => f.id === floorId);

  if (!floor) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Apartment Floor not found.
      </div>
    );
  }

  const { unitType, roomCount: count, floorNumber, area } = floor;

  const apartmentLayouts: ApartmentLayout[] = generateApartmentsForFloor({
    count,
    unitType,
    floorNumber,
    area,
  });
  const apartment = apartmentLayouts.find((a) => a.id === apartmentId);

  if (!apartment) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Apartment not found.
      </div>
    );
  }

  const apartmentDescription: string = generateApartmentDescription({
    ...apartment,
  });

  return (
    <Card className="mx-auto max-w-4xl overflow-hidden shadow-lg border-none transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={apartment.thumbnail ?? "/assets/apartment-fallback.svg"}
          alt={`Apartment ${apartment.apartmentNumber}`}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold text-primary">
          Apartment {apartment.apartmentNumber}
        </h2>

        <div className="text-sm text-muted-foreground">
          <span className="inline-block mr-4">
            Type: <strong>{apartment.unitType}</strong>
          </span>
          <span className="inline-block mr-4">
            Area: <strong>{area}</strong>
          </span>
          <span className="inline-block">
            Rooms: <strong>{apartment.roomCount}</strong>
          </span>
        </div>

        <p className="text-base leading-relaxed text-gray-700 mt-2">
          {apartmentDescription}
        </p>
      </div>
    </Card>
  );
};

export default ApartmentDetails;
