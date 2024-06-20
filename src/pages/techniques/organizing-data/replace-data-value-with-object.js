import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceDataValueWithObject from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceDataValueWithObject";

const ReplaceDataValueWithObjectPage = () => {
  return (
    <body
      class="locale-en announcement replace-data-value-with-object"
      data-body_class="replace-data-value-with-object"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceDataValueWithObject />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceDataValueWithObjectPage;
