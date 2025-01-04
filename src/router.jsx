import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Layout from "@/components/Layout";

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ],
  },
]);
