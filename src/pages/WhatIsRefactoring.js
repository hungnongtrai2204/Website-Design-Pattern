import Cart from "../components/cart/Cart";
import ContentWhatIsRefactoring from "../components/content/refactoring/ContentWhatIsRefactoring";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const WhatIsRefactoringPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentWhatIsRefactoring />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default WhatIsRefactoringPage;
