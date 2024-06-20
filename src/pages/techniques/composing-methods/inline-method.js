import ContentComposingMethods from "../../../components/content/refactoring/techniques/composing-methods/ContentComposingMethods";
import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentInlineMethod from "../../../components/content/refactoring/techniques/composing-methods/ContentInlineMethod";

const InlineMethodPage = () => {
  return (
    <body
      class="locale-en announcement inline-method"
      data-body_class="inline-method"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentInlineMethod />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default InlineMethodPage;
