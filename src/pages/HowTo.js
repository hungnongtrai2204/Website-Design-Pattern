import Cart from "../components/cart/Cart";
import ContentHowTo from "../components/content/refactoring/ContentHowTo";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const HowToPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentHowTo />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default HowToPage;
