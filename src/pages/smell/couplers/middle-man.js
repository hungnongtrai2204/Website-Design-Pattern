import Cart from "../../../components/cart/Cart";
import ContentMessageChains from "../../../components/content/refactoring/smell/couplers/ContentMessageChains";
import ContentMiddleMan from "../../../components/content/refactoring/smell/couplers/ContentMiddleMan";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const MiddleManPage = () => {
  return (
    <body
      class="locale-ru announcement middle-man"
      data-body_class="middle-man"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentMiddleMan />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default MiddleManPage;
