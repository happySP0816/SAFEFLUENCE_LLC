import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/layouts/pageLayout";
import Index from "./pages";
import Profile from "./pages/profile";
import Upload from "./pages/upload";
import Upgrade from "./pages/upgrade";
import Calender from "./pages/calender";
import Result from "./pages/result";
import Edit from "./pages/edit";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Upload />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/upgrade",
        element: <Upgrade />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
    ],
  },
]);

function PageRoute() {
  return <RouterProvider router={router} />;
}

export default PageRoute;
