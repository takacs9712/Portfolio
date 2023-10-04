import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Syncee from "./Pages/Syncee";
import Animal from "./Pages/Animal";
import ImageUpload from "./Pages/ImageUpload";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/ErrorPage";
import FoodOrder from "./Pages/FoodOrder";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Portfolio/Syncee", element: <Syncee /> },
      { path: "/Portfolio/Animal", element: <Animal /> },
      { path: "/Portfolio/ImageUpload", element: <ImageUpload /> },
      { path: "/Portfolio/FoodOrder", element: <FoodOrder /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
