import Cart from "../../../components/cart/Cart";
import ContentCouplers from "../../../components/content/refactoring/smell/couplers/ContentCouplers";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const CouplersPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentCouplers />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default CouplersPage;
