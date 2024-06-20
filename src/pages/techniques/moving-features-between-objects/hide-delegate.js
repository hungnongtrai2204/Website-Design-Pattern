import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentHideDelegate from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentHideDelegate";

const HideDelegatePage = () => {
  return (
    <body
      class="locale-en announcement hide-delegate"
      data-body_class="hide-delegate"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentHideDelegate />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default HideDelegatePage;
