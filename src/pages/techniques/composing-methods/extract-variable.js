import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentExtractVariable from "../../../components/content/refactoring/techniques/composing-methods/ContentExtractVariable";

const ExtractVariablePage = () => {
  return (
    <body
      class="locale-en announcement extract-variable"
      data-body_class="extract-variable"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentExtractVariable />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ExtractVariablePage;
