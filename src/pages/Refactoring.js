import Cart from "../components/cart/Cart";
import ContentHome from "../components/content/home/ContentHome";
import ContentRefactoring from "../components/content/refactoring/ContentRefactoring";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const RefactoringPage = () => {
  return (
    <body
      className="locale-ru    announcement   no-feature index-2-refactoring "
      data-body_class="no-feature index-2-refactoring "
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentRefactoring />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default RefactoringPage;
