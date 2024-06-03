import Cart from "../../../components/cart/Cart";
// import ContentLongMethod from "../../../components/content/refactoring/smell/bloater/ContentLongMethod";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const LargeClassPage = () => {
  return (
    <body
      class="locale-ru announcement long-method"
      data-body_class="long-method"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        {/* <ContentLongMethod /> */}
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default LargeClassPage;
