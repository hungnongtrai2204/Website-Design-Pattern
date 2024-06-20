import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentMoveField from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentMoveField";

const MoveFieldPage = () => {
  return (
    <body
      class="locale-en announcement move-field"
      data-body_class="move-field"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentMoveField />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default MoveFieldPage;
