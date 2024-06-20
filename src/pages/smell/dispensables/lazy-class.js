import Cart from "../../../components/cart/Cart";
import ContentLazyClass from "../../../components/content/refactoring/smell/dispensables/ContentLazyClass";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const LazyClassPage = () => {
  return (
    <body
      class="locale-ru announcement lazy-class"
      data-body_class="lazy-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentLazyClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default LazyClassPage;
