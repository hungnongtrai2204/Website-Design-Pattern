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
import CommentsPage from "./pages/smell/dispensables/comments";
import DuplicateCodePage from "./pages/smell/dispensables/duplicate-code";
import LazyClassPage from "./pages/smell/dispensables/lazy-class";
import DataClassPage from "./pages/smell/dispensables/data-class";
import DeadCodePage from "./pages/smell/dispensables/dead-code";
import SpeculativeGeneralityPage from "./pages/smell/dispensables/speculative-generality";
import CouplersPage from "./pages/smell/couplers/couplers";
import FeatureEnvyPage from "./pages/smell/couplers/feature-envy";
import InappropriateIntimacyPage from "./pages/smell/couplers/inappropriate-intimacy";
import MessageChainsPage from "./pages/smell/couplers/message-chains";
import MiddleManPage from "./pages/smell/couplers/middle-man";
import OtherPage from "./pages/smell/other/other";
import IncompleteLibraryClassPage from "./pages/smell/other/incomplete-library-class";
import TechniquesPage from "./pages/techniques/techniques";
import ComposingMethodsPage from "./pages/techniques/composing-methods/composing-methods";
import ExtractMethodPage from "./pages/techniques/composing-methods/extract-method";
import $ from "jquery";
import InlineMethodPage from "./pages/techniques/composing-methods/inline-method";
import ExtractVariablePage from "./pages/techniques/composing-methods/extract-variable";
import InlineTempPage from "./pages/techniques/composing-methods/inline-temp";
import ReplaceTempWithQueryPage from "./pages/techniques/composing-methods/replace-temp-with-query";
import SplitTemporaryVariablePage from "./pages/techniques/composing-methods/split-temporary-variable";
import RemoveAssignmentsToParametersPage from "./pages/techniques/composing-methods/remove-assignments-to-parameters";
import ReplaceMethodWithMethodObjectPage from "./pages/techniques/composing-methods/replace-method-with-method-object";
import SubstituteAlgorithmPage from "./pages/techniques/composing-methods/substitute-algorithm";
import MovingFeaturesBetweenObjectsPage from "./pages/techniques/moving-features-between-objects/moving-features-between-objects";
import MoveMethodPage from "./pages/techniques/moving-features-between-objects/move-method";
import MoveFieldPage from "./pages/techniques/moving-features-between-objects/move-field";
import ExtractClassPage from "./pages/techniques/moving-features-between-objects/extract-class";
import InlineClassPage from "./pages/techniques/moving-features-between-objects/inline-class";
import HideDelegatePage from "./pages/techniques/moving-features-between-objects/hide-delegate";
import RemoveMiddleManPage from "./pages/techniques/moving-features-between-objects/remove-middle-man";
import IntroduceForeignMethodPage from "./pages/techniques/moving-features-between-objects/introduce-foreign-method";
import IntroduceLocalExtensionPage from "./pages/techniques/moving-features-between-objects/introduce-local-extension";
import OrganizingDataPage from "./pages/techniques/organizing-data/organizing-data";
import SelfEncapsulateFieldPage from "./pages/techniques/organizing-data/self-encapsulate-field";
import ReplaceDataValueWithObjectPage from "./pages/techniques/organizing-data/replace-data-value-with-object";
import ChangeValueToReferencePage from "./pages/techniques/organizing-data/change-value-to-reference";
import ChangeReferenceToValuePage from "./pages/techniques/organizing-data/change-reference-to-value";
import ReplaceArrayWithObjectPage from "./pages/techniques/organizing-data/replace-array-with-object";
import DuplicateObservedDataPage from "./pages/techniques/organizing-data/duplicate-observed-data";
import ChangeUnidirectionalAssociationToBidirectionalPage from "./pages/techniques/organizing-data/change-unidirectional-association-to-bidirectional";
import ChangeBidirectionalAssociationtoUnidirectionalPage from "./pages/techniques/organizing-data/change-bidirectional-association-to-unidirectional";
import ReplaceMagicNumberwithSymbolicConstantPage from "./pages/techniques/organizing-data/replace-magic-number-with-symbolic-constant";
import EncapsulateFieldPage from "./pages/techniques/organizing-data/encapsulate-field";
import EncapsulateCollectionPage from "./pages/techniques/organizing-data/encapsulate-collection";
import ReplaceTypeCodewithClassPage from "./pages/techniques/organizing-data/replace-type-code-with-class";
import ReplaceTypeCodewithSubclassesPage from "./pages/techniques/organizing-data/replace-type-code-with-subclasses";
import ReplaceTypeCodewithStateStrategyPage from "./pages/techniques/organizing-data/replace-type-code-with-state-strategy";
import ReplaceSubclasswithFieldsPage from "./pages/techniques/organizing-data/replace-subclass-with-fields";

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
  {
    path: "/refactoring/smells/dispensables/comments",
    element: <CommentsPage />,
  },
  {
    path: "/refactoring/smells/dispensables/duplicate-code",
    element: <DuplicateCodePage />,
  },
  {
    path: "/refactoring/smells/dispensables/lazy-class",
    element: <LazyClassPage />,
  },
  {
    path: "/refactoring/smells/dispensables/data-class",
    element: <DataClassPage />,
  },
  {
    path: "/refactoring/smells/dispensables/dead-code",
    element: <DeadCodePage />,
  },
  {
    path: "/refactoring/smells/dispensables/speculative-generality",
    element: <SpeculativeGeneralityPage />,
  },
  {
    path: "/refactoring/smells/couplers",
    element: <CouplersPage />,
  },
  {
    path: "/refactoring/smells/couplers/feature-envy",
    element: <FeatureEnvyPage />,
  },
  {
    path: "/refactoring/smells/couplers/inappropriate-intimacy",
    element: <InappropriateIntimacyPage />,
  },
  {
    path: "/refactoring/smells/couplers/message-chains",
    element: <MessageChainsPage />,
  },
  {
    path: "/refactoring/smells/couplers/middle-man",
    element: <MiddleManPage />,
  },
  {
    path: "/refactoring/smells/other",
    element: <OtherPage />,
  },
  {
    path: "/refactoring/smells/other/incomplete-library-class",
    element: <IncompleteLibraryClassPage />,
  },
  {
    path: "/refactoring/techniques",
    element: <TechniquesPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods",
    element: <ComposingMethodsPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/extract-method",
    element: <ExtractMethodPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/inline-method",
    element: <InlineMethodPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/extract-variable",
    element: <ExtractVariablePage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/inline-temp",
    element: <InlineTempPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/replace-temp-with-query",
    element: <ReplaceTempWithQueryPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/split-temporary-variable",
    element: <SplitTemporaryVariablePage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/remove-assignments-to-parameters",
    element: <RemoveAssignmentsToParametersPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/replace-method-with-method-object",
    element: <ReplaceMethodWithMethodObjectPage />,
  },
  {
    path: "/refactoring/techniques/composing-methods/substitute-algorithm",
    element: <SubstituteAlgorithmPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects",
    element: <MovingFeaturesBetweenObjectsPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/move-method",
    element: <MoveMethodPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/move-field",
    element: <MoveFieldPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/extract-class",
    element: <ExtractClassPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/inline-class",
    element: <InlineClassPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/hide-delegate",
    element: <HideDelegatePage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/remove-middle-man",
    element: <RemoveMiddleManPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/introduce-foreign-method",
    element: <IntroduceForeignMethodPage />,
  },
  {
    path: "/refactoring/techniques/moving-features-between-objects/introduce-local-extension",
    element: <IntroduceLocalExtensionPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data",
    element: <OrganizingDataPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/self-encapsulate-field",
    element: <SelfEncapsulateFieldPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-data-value-with-object",
    element: <ReplaceDataValueWithObjectPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/change-value-to-reference",
    element: <ChangeValueToReferencePage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/change-reference-to-value",
    element: <ChangeReferenceToValuePage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-array-with-object",
    element: <ReplaceArrayWithObjectPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/duplicate-observed-data",
    element: <DuplicateObservedDataPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional",
    element: <ChangeUnidirectionalAssociationToBidirectionalPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional",
    element: <ChangeBidirectionalAssociationtoUnidirectionalPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-magic-number-with-symbolic-constant",
    element: <ReplaceMagicNumberwithSymbolicConstantPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/encapsulate-field",
    element: <EncapsulateFieldPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/encapsulate-collection",
    element: <EncapsulateCollectionPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-type-code-with-class",
    element: <ReplaceTypeCodewithClassPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-type-code-with-subclasses",
    element: <ReplaceTypeCodewithSubclassesPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy",
    element: <ReplaceTypeCodewithStateStrategyPage />,
  },
  {
    path: "/refactoring/techniques/organizing-data/replace-subclass-with-fields",
    element: <ReplaceSubclasswithFieldsPage />,
  },
  // {
  //   path: "/refactoring/techniques/composing-methods/extract-method",
  //   element: (
  //     <iframe
  //       src="/extract-method.html"
  //       title="Extract Method"
  //       width="100%"
  //       height="930px"
  //       style={{ border: "none" }}
  //     />
  //   ),
  // },
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
