import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        index:true,
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

export default routes;
