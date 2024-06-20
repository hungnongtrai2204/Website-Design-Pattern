import Cart from "../../../components/cart/Cart";
import ContentOther from "../../../components/content/refactoring/smell/other/ContentOther";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const OtherPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentOther />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default OtherPage;
