import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import CreateItem from "./components/CreateItem.js";
// import ShowItemList from "./components/ShowItemList";
// import ShowItemDetails from "./components/ShowItemDetails";
// import UpdateItemInfo from "./components/UpdateItemInfo";

// const router = createBrowserRouter([
//   { path: "/", element: <ShowItemList /> },
//   { path: "/create-item", element: <CreateItem /> },
//   { path: "/show-item/:id", element: <ShowItemDetails /> },
//   { path: "/edit-item/:id", element: <UpdateItemInfo /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
