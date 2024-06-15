import Cart from "../../../components/cart/Cart";
import ContentPrimitiveObsession from "../../../components/content/refactoring/smell/bloater/ContentPrimitiveObsession";
// import ContentLongMethod from "../../../components/content/refactoring/smell/bloater/ContentLongMethod";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const PrimitiveObsessionPage = () => {
  return (
    <body
      class="locale-ru announcement primitive-obsession"
      data-body_class="primitive-obsession"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentPrimitiveObsession />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default PrimitiveObsessionPage;
