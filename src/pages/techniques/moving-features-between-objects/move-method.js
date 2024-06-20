import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentMoveMethod from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentMoveMethod";

const MoveMethodPage = () => {
  return (
    <body
      class="locale-en announcement move-method"
      data-body_class="move-method"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentMoveMethod />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default MoveMethodPage;
