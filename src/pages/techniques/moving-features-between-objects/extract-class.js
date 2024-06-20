import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentExtractClass from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentExtractClass";

const ExtractClassPage = () => {
  return (
    <body
      class="locale-en announcement extract-class"
      data-body_class="extract-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentExtractClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ExtractClassPage;
