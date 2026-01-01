import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Coding from "./Coding";
import Cooking from "./Cooking";
import Mentorship from "./Mentorship";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <About /> },
      { path: "coding", element: <Coding /> },
      { path: "mentorship", element: <Mentorship /> },
      { path: "cooking", element: <Cooking /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
