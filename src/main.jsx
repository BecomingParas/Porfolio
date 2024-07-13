import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import { Outlet, Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";


import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Skills from "./sections/Skills/Skills.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Hero />,
//       },
//       {
//         path: "projects",
//         element: <Projects />,
//       },
//       {
//         path:"skills",
//         element:<Skills />
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App />}>
      <Route path="" element={<Hero />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ThemeProvider>
    <RouterProvider router={router} />
      
      </ThemeProvider>
  </React.StrictMode>
);
