import { Card, CardContent } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import type { FloorLayout } from "@/interfaces/structures.models";
import { Link } from "react-router-dom";
import { Home, Logs, LandPlot } from "lucide-react";

const FloorCard: React.FC<FloorLayout> = ({
  id,
  floorNumber,
  thumbnail,
  area,
  unitType,
  roomCount,
}) => {
  return (
    <Card className="group overflow-hidden shadow-md transition-transform hover:scale-[1.02] cursor-pointer p-0 bg-white border border-xl border-white h-full">
      {/* Image wrapper keeps dimensions consistent */}
      <div className="relative overflow-hidden h-64">
        <img
          src={thumbnail ?? "/assets/floor-fallback.svg"}
          alt={`floor ${floorNumber}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <CardContent className="flex flex-col p-4 sm:px-8 items-start justify-around flex-1 gap-8">
        <div className="flex flex-1 w-full gap-4">
          <div className="flex flex-col gap-2 min-w-[40%]">
            <h3 className="text-2xl font-semibold text-primary capitalize">
              Floor {floorNumber}
            </h3>
            <div className="flex gap-x-8 gap-y-4 items-baseline flex-wrap">
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
                <LandPlot /> {area}
              </p>

              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                <Logs /> {unitType}
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                <Home /> {roomCount}{" "}
                {roomCount > 1 ? "apartments" : "apartment"}
              </p>
            </div>
          </div>
        </div>
        <Link to={`./floors/${id}`}>
          <Button variant="outline" size="sm" className="w-full">
            View Floor
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FloorCard;
