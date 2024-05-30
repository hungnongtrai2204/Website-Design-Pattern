import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import StorePage from "./pages/Store";
import BookPage from "./pages/Book";
import CoursePage from "./pages/Course";
import RefactoringPage from "./pages/Refactoring";
import WhatIsRefactoringPage from "./pages/WhatIsRefactoring";
import TechnicalDebtPage from "./pages/TechnicalDebt";
import WhenPage from "./pages/When";
import HowToPage from "./pages/HowTo";
import CatalogPage from "./pages/Catalog";
import SmellPage from "./pages/Smell";
import BloatersPage from "./pages/smell/bloaters/bloaters";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/store",
    element: <StorePage />,
  },
  {
    path: "/store/book",
    element: <BookPage />,
  },
  {
    path: "/store/course",
    element: <CoursePage />,
  },
  {
    path: "/refactoring",
    element: <RefactoringPage />,
  },
  {
    path: "/refactoring/what-is-refactoring",
    element: <WhatIsRefactoringPage />,
  },
  {
    path: "/refactoring/technical-debt",
    element: <TechnicalDebtPage />,
  },
  {
    path: "/refactoring/when",
    element: <WhenPage />,
  },
  {
    path: "/refactoring/how-to",
    element: <HowToPage />,
  },
  {
    path: "/refactoring/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/refactoring/smells",
    element: <SmellPage />,
  },
  {
    path: "/refactoring/smells/bloaters",
    element: <BloatersPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
