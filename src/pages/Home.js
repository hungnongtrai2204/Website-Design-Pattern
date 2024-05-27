import Cart from "../components/cart/Cart";
import ContentHome from "../components/content/home/ContentHome";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <body
      class="locale-ru announcement no-feature index-2-patterns index-2-refactoring"
      data-body_class="no-feature index-2-patterns index-2-refactoring "
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentHome />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default HomePage;
