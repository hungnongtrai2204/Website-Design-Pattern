import Cart from "../components/cart/Cart";
import ContentCatalog from "../components/content/refactoring/ContentCatalog";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const CatalogPage = () => {
  return (
    <body
      class="locale-ru announcement no-feature"
      data-body_class="no-feature"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentCatalog />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default CatalogPage;
