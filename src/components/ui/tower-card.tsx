import { Card, CardContent } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import type { Tower } from "@/interfaces/structures.models";
import { Link } from "react-router-dom";
import { Separator } from "./separator";
import { MapPin, Layers } from "lucide-react";

const TowerCard: React.FC<Tower> = ({
  id,
  title,
  description,
  imageUrl,
  location,
  floors,
}) => {
  return (
    <Card className="group overflow-hidden shadow-md transition-transform hover:scale-[1.02] cursor-pointer p-0 sm:flex-row bg-white border border-xl border-white">
      {/* Image wrapper keeps dimensions consistent */}
      <div className="relative h-80 sm:w-[40%] overflow-hidden">
        <img
          src={imageUrl ?? "/tower-fallback.svg"}
          alt={`${title} tower`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <CardContent className="flex flex-col p-4 py-12 items-start justify-around flex-1">
        <div className="flex flex-1 w-full gap-4">
          <div className="flex flex-col gap-4 min-w-[40%]">
            <h3 className="text-2xl font-semibold text-primary capitalize">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
              <MapPin /> {location?.city}, {location?.district}
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
              <Layers /> {floors} floors
            </p>
          </div>
          <div className="flex items-center h-full">
            <Separator orientation="vertical" className="bg-[#98A2B3]" />
          </div>
          <div>
            <p className="font-bold mb-2">Description</p>
            <p className="flex-1 leading-6 tracking-tight">{description}</p>
          </div>
        </div>
        <Link to={`./${id}`}>
          <Button variant="outline" size="sm" className="w-full">
            View Tower
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TowerCard;
