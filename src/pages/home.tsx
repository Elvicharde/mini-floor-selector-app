import { Button } from "@/components/shared/button";
import useSetLayoutTheme from "@/hooks/use-theme";
import { Themes } from "@/interfaces/shared.models";
import { Link } from "react-router-dom";

const Home = () => {
  useSetLayoutTheme({ background: "bg-black/80", mode: Themes.DARK });

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white text-2xl sm:max-w-[80%] mx-auto text-center gap-8 min-h-[500px] px-4 sm:px-0">
        <p>Tower Visualizer</p>
        <p className="text-4xl leading-12 sm:text-5xl font-bold">
          Bring Towers to Life, Floor by Floor
        </p>
        <p className="sm:max-w-[70%] leading-9">
          Try out our 3D Tower Explorer (Beta). Emphasize your step-by-step
          exploration and demos with our proven architectural realism
        </p>
      </div>
      <div className="flex justify-center mt-8 sm:mt-0">
        <Link to={"/towers"} replace>
          <Button className="w-[250px] h-14 rounded-lg text-xl font-bold cursor-pointer bg-[#8c95a0] text-[#F8FAFC]">
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
