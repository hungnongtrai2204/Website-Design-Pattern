import Cart from "../../../components/cart/Cart";
import ContentOoAbusers from "../../../components/content/refactoring/smell/oo-abusers/ContentOoAbusers";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const OoAbusersPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentOoAbusers />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default OoAbusersPage;
