import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentSplitTemporaryVariable from "../../../components/content/refactoring/techniques/composing-methods/ContentSplitTemporaryVariable";

const SplitTemporaryVariablePage = () => {
  return (
    <body
      class="locale-en announcement split-temporary-variable"
      data-body_class="split-temporary-variable"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentSplitTemporaryVariable />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default SplitTemporaryVariablePage;
