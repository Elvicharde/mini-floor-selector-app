import { useTheme } from "@/contexts/theme-provider";
import { isNestedPath } from "@/lib/utils";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Button } from "../shared/button";
import { Link } from "react-router-dom";

const MainLayout = () => {
  const { theme } = useTheme();
  const logoType = theme.mode === "Dark" ? "logo-white" : "logo";
  const logoBorderColor = theme.mode === "Dark" ? "border-white" : "border-[#252F8D]";
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const navigate = useNavigate();

  return (
    <div
      className={`group min-h-screen ${theme.background} px-4 py-6 !pb-[120px] flex flex-col`}
    >
      <header className="mb-12 text-center text-2xl font-bold text-primary w-fit">
        <Link to={"/home"} replace>
          <img
            width="300"
            height="107"
            alt="Property Visualizer Logo"
            src={`https://propertyvisualizer.com/wp-content/uploads/2024/05/${logoType}.png`}
            className={`cursor-pointer ${logoBorderColor} border-2`}
          />
        </Link>
        {isNestedPath(pathArray) && (
          <span
            onClick={() =>
              location.state?.from
                ? navigate(location.state?.from)
                : navigate(-1)
            }
            className="flex max-h-5 items-center justify-start gap-2 relative top-6 right-1 sm:top-15 sm:left-12"
          >
            <Button className="!w-fit !p-0" variant="ghost">
              <img
                src="/assets/icons/dropdown-arrow.svg"
                className="h-5 w-5 rotate-90"
                alt="back-navigator"
              />
            </Button>
            <span className="text-sm font-medium text-[#667185]">Back</span>
          </span>
        )}
      </header>
      <main className="self-center sm:w-[90%] w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
