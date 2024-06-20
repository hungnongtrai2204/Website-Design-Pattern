import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentInlineTemp from "../../../components/content/refactoring/techniques/composing-methods/ContentInlineTemp";

const InlineTempPage = () => {
  return (
    <body
      class="locale-en announcement inline-temp"
      data-body_class="inline-temp"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentInlineTemp />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default InlineTempPage;
