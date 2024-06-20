import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceArrayWithObject from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceArrayWithObject";

const ReplaceArrayWithObjectPage = () => {
  return (
    <body
      class="locale-en announcement replace-array-with-object"
      data-body_class="replace-array-with-object"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceArrayWithObject />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceArrayWithObjectPage;
