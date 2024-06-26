import Cart from "../components/cart/Cart";
import ContentWhen from "../components/content/refactoring/ContentWhen";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const WhenPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentWhen />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default WhenPage;
