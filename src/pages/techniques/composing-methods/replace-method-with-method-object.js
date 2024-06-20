import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceMethodWithMethodObject from "../../../components/content/refactoring/techniques/composing-methods/ContentReplaceMethodWithMethodObject";

const ReplaceMethodWithMethodObjectPage = () => {
  return (
    <body
      class="locale-en announcement replace-method-with-method-object"
      data-body_class="replace-method-with-method-object"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceMethodWithMethodObject />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceMethodWithMethodObjectPage;
