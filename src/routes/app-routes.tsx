import PageNotFound from "@/components/not-found/not-found";
import TowerDetails from "@/components/ui/tower/tower-details";
import Home from "@/pages/home";
import TowerOverview from "@/pages/towers";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "@/components/layout/main-layout";
import FloorDetails from "@/components/ui/floor/floor-details";
import ApartmentDetails from "@/components/ui/apartment/apartment-details";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="/home" />,
    },
    {
      path: "/",
      element: <MainLayout />, // 👈 layout applied to children
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "towers",
          element: <TowerOverview />,
          children: [
            {
              path: ":towerId",
              element: <TowerDetails />,
            },
            {
              path: ":towerId/floors/:floorId",
              element: <FloorDetails />,
            },
            {
              path: ":towerId/floors/:floorId/apartments/:apartmentId",
              element: <ApartmentDetails />,
            },
          ],
        },
        // other layout-wrapped routes here
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
