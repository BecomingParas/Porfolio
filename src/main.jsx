import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";


import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Skills from "./sections/Skills/Skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ThemeProvider>
    <RouterProvider router={router} />
      
      </ThemeProvider>
  </React.StrictMode>
);
