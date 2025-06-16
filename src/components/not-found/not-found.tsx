import { Link } from "react-router-dom";
import { Button } from "../shared/button";
const PageNotFound = () => {
  return (
    <div className="min-h-screen p-8 ">
      <div className="flex h-full flex-col">
        <h3 className="my-4 text-center text-4xl font-bold">
          Oops! Page not Found
        </h3>
        <img
          src="/404-building.svg"
          alt="404 Not Found"
          className="mx-auto w-full max-w-[575px]"
        />
        <Link
          to={"/home"}
          replace
          className="mx-auto mt-5 w-full max-w-[200px] "
        >
          <Button className="w-full h-10 text-base cursor-pointer bg-[#94A3B8] text-[#F8FAFC]">
            Go back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
