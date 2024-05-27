import Cart from "../components/cart/Cart";
import ContentStore from "../components/content/store/ContentStore";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const StorePage = () => {
  return (
    <body
      class="locale-ru announcement no-feature"
      data-body_class="no-feature "
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentStore />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default StorePage;
