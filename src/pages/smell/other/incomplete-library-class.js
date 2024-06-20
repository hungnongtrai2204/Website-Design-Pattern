import Cart from "../../../components/cart/Cart";
import ContentIncompleteLibraryClass from "../../../components/content/refactoring/smell/other/ContentIncompleteLibraryClass";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const IncompleteLibraryClassPage = () => {
  return (
    <body
      class="locale-ru announcement incomplete-library-class"
      data-body_class="incomplete-library-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentIncompleteLibraryClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default IncompleteLibraryClassPage;
