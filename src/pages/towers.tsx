import TowerCard from "@/components/ui/tower-card";
import useSetLayoutTheme from "@/hooks/use-theme";
import { towersData } from "@/services/seeds/sample-data";
import { Link, Outlet, useParams } from "react-router-dom";

const TowerOverview = () => {
  const { towerId } = useParams<{ towerId: string }>();
  const childRouteActive = !!towerId;
  useSetLayoutTheme({ background: "bg-[#FFF9FB]" });
  return (
    <>
      <div
        className={`flex flex-col gap-16 mt-6 justify-between ${
          childRouteActive ? "hidden" : ""
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#252F8D]">TOWER LISTINGS</h1>
        <div className="flex flex-col gap-12">
          {towersData.map((tower, idx) => {
            return (
              <Link to={`./${tower.id}`} key={tower.id}>
                <TowerCard key={idx} {...tower} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={`${!childRouteActive ? "hidden" : ""}`}>
        <Outlet />
      </div>
    </>
  );
};

export default TowerOverview;
