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
import LongMethodPage from "./pages/smell/bloaters/long-method";
import LargeClassPage from "./pages/smell/bloaters/large-class";
import PrimitiveObsessionPage from "./pages/smell/bloaters/primitive-obsession";
import LongParameterListPage from "./pages/smell/bloaters/long-parameter-list";
import DataClumpsPage from "./pages/smell/bloaters/data-clumps";
import OoAbusersPage from "./pages/smell/oo-abusers/oo-abusers";
import SwitchStatementsPage from "./pages/smell/oo-abusers/switch-statements";
import TemporaryFieldPage from "./pages/smell/oo-abusers/temporary-field";
import RefusedBequestPage from "./pages/smell/oo-abusers/refused-bequest";
import AlternativeClassesWithDifferentInterfacesPage from "./pages/smell/oo-abusers/AlternativeClassesWithDifferentInterfaces";
import ChangePreventersPage from "./pages/smell/change-preventers/change-preventers";
import DivergentChangePage from "./pages/smell/change-preventers/divergent-change";
import ShotgunSurgeryPage from "./pages/smell/change-preventers/shotgun-surgery";
import ParallelInheritanceHierarchiesPage from "./pages/smell/change-preventers/parallel-inheritance-hierarchies";
import DispensablesPage from "./pages/smell/dispensables/dispensables";
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
  {
    path: "/refactoring/smells/bloaters/long-method",
    element: <LongMethodPage />,
  },
  {
    path: "/refactoring/smells/bloaters/large-class",
    element: <LargeClassPage />,
  },
  {
    path: "/refactoring/smells/bloaters/primitive-obsession",
    element: <PrimitiveObsessionPage />,
  },
  {
    path: "/refactoring/smells/bloaters/long-parameter-list",
    element: <LongParameterListPage />,
  },
  {
    path: "/refactoring/smells/bloaters/data-clumps",
    element: <DataClumpsPage />,
  },
  {
    path: "/refactoring/smells/oo-abusers",
    element: <OoAbusersPage />,
  },
  {
    path: "/refactoring/smells/oo-abusers/switch-statements",
    element: <SwitchStatementsPage />,
  },
  {
    path: "/refactoring/smells/oo-abusers/temporary-field",
    element: <TemporaryFieldPage />,
  },
  {
    path: "/refactoring/smells/oo-abusers/refused-bequest",
    element: <RefusedBequestPage />,
  },
  {
    path: "/refactoring/smells/oo-abusers/alternative-classes-with-different-interfaces",
    element: <AlternativeClassesWithDifferentInterfacesPage />,
  },
  {
    path: "/refactoring/smells/change-preventers",
    element: <ChangePreventersPage />,
  },
  {
    path: "/refactoring/smells/change-preventers/divergent-change",
    element: <DivergentChangePage />,
  },
  {
    path: "/refactoring/smells/change-preventers/shotgun-surgery",
    element: <ShotgunSurgeryPage />,
  },
  {
    path: "/refactoring/smells/change-preventers/parallel-inheritance-hierarchies",
    element: <ParallelInheritanceHierarchiesPage />,
  },
  {
    path: "/refactoring/smells/dispensables",
    element: <DispensablesPage />,
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
