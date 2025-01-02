import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AdminPage from "@/pages/AdminPage";

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/admin",
            element: <AdminPage />
        }
    ]
)