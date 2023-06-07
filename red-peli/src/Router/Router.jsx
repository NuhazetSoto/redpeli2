import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import App from "../App";
import Dashboard from "../layouts/Dashboard/Dashboard";
import VideoList from "../Pages/VideoList/VideoList";
import VideoPage from "../Pages/VideoPage/VideoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
        { path: "/dashboard", element: <VideoList /> },
        { path: "/dashboard/video/:id", element: <VideoPage /> }
    ],
  },
  {
    path: "/videos/:id",
    element: <Dashboard />,
  },
]);