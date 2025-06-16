import { Link, useParams } from "react-router-dom";
import { floorLayouts } from "@/services/seeds/sample-data";
import {
  generateApartmentsForFloor,
  generateFloorDescription,
} from "@/lib/utils";
import type { ApartmentLayout } from "@/interfaces/structures.models";
import ApartmentCard from "../apartment-card";

const FloorDetails = () => {
  const { floorId } = useParams<{ floorId: string }>();

  const floor = floorLayouts.find((f) => f.id === floorId);

  if (!floor) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Floor not found.
      </div>
    );
  }
  const { unitType, roomCount: count, floorNumber, area } = floor;
  const floorDescription: string = generateFloorDescription({ ...floor });
  const apartmentLayouts: ApartmentLayout[] = generateApartmentsForFloor({
    count,
    unitType,
    floorNumber,
    area,
  });

  return (
    <div className="max-w-4xl 2xl:max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-[#252F8D]">Floor {floorNumber}</h1>
      <p className="text-muted-foreground">{floorDescription}</p>

      <div className="grid sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8">
        {apartmentLayouts.map((apartment, idx) => {
          return (
            <Link to={`./apartments/${apartment.id}`} key={apartment.id}>
              <ApartmentCard key={idx} {...apartment} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FloorDetails;
