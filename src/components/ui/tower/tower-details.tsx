import { Link, useParams } from "react-router-dom";
import { floorLayouts, towersData } from "@/services/seeds/sample-data";
import FloorCard from "../floor-card";

const TowerDetails = () => {
  const { towerId } = useParams<{ towerId: string }>();

  const tower = towersData.find((t) => t.id === towerId);

  if (!tower) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Tower not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl 2xl:max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-primary text-[#252F8D]">{tower.title}</h1>
      <p className="text-muted-foreground">{tower.description}</p>

      <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8">
        {floorLayouts.map((floor, idx) => (
          <Link key={floor.id} to={`./floors/${floor.id}`}>
            <FloorCard key={idx} {...floor} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TowerDetails;
