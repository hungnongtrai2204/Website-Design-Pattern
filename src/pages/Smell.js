import Cart from "../components/cart/Cart";
import ContentSmell from "../components/content/refactoring/smell/ContentSmell";
// import ContentCatalog from "../components/content/refactoring/ContentCatalog";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const SmellPage = () => {
  return (
    <body
      className="locale-ru announcement no-feature"
      data-body_class="no-feature "
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentSmell />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default SmellPage;
