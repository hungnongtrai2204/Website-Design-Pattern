import Cart from "../../../components/cart/Cart";
import ContentLargeClass from "../../../components/content/refactoring/smell/bloater/ContentLargeClass";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const LargeClassPage = () => {
  return (
    <body
      class="locale-ru announcement large-class"
      data-body_class="large-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentLargeClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default LargeClassPage;
