import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Layout from "@/components/Layout";
import LoginPage from "@/pages/LoginPage";
import FrameExample from "@/components/FrameExample";

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <FrameExample />,
  }
]);
