import Cart from "../components/cart/Cart";
import ContentBook from "../components/content/store/ContentBook";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const BookPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentBook />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default BookPage;
