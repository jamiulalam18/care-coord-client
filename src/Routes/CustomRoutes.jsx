import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import AddNewCamp from "../Pages/AddNewCamp";
import AllCamps from "../Pages/AllCamps";
import CampDetails from "../Pages/CampDetails";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Pages/DashBoard";

const CustomRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Error Page</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/addCamp",
        element: (
          <PrivateRoute>
            <AddNewCamp></AddNewCamp>
          </PrivateRoute>
        ),
      },
      {
        path: "/allPosts",
        element: (
          <PrivateRoute>
            <AllCamps></AllCamps>
          </PrivateRoute>
        ),
      },
      {
        path: "campDetails/:id",
        element: (
          <PrivateRoute>
            <CampDetails></CampDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return params.id;
        },
      },
      {
        path: "dashBoard/:id",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return params.id;
        },
      },
    ],
  },
]);

export default CustomRoutes;
