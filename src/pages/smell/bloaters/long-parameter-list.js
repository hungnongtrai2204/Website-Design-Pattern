import Cart from "../../../components/cart/Cart";
import ContentLongParameterList from "../../../components/content/refactoring/smell/bloater/ContentLongParameterList";
// import ContentPrimitiveObsession from "../../../components/content/refactoring/smell/bloater/ContentPrimitiveObsession";
// import ContentLongMethod from "../../../components/content/refactoring/smell/bloater/ContentLongMethod";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const LongParameterListPage = () => {
  return (
    <body
      class="locale-ru announcement long-parameter-list"
      data-body_class="long-parameter-list"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentLongParameterList />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default LongParameterListPage;
