import "../login-page/login.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavPage from "./NavPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: NavPage,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

const NavBar = () => {
  return (
    <div className="navbar">
      <i className="bi bi-list"></i>
    </div>
  );
};

export default NavBar;
