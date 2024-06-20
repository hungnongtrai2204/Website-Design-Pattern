import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentInlineClass from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentInlineClass";

const InlineClassPage = () => {
  return (
    <body
      class="locale-en announcement inline-class"
      data-body_class="inline-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentInlineClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default InlineClassPage;
