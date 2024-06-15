import Cart from "../../../components/cart/Cart";
import ContentRefusedBequest from "../../../components/content/refactoring/smell/oo-abusers/ContentRefusedBequest";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const RefusedBequestPage = () => {
  return (
    <body
      class="locale-ru announcement refused-bequest"
      data-body_class="refused-bequest"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentRefusedBequest />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default RefusedBequestPage;
