import Cart from "../../../components/cart/Cart";
import ContentFeatureEnvy from "../../../components/content/refactoring/smell/couplers/ContentFeatureEnvy";
import ContentInappropriateIntimacy from "../../../components/content/refactoring/smell/couplers/ContentInappropriateIntimacy";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const InappropriateIntimacyPage = () => {
  return (
    <body
      class="locale-ru announcement inappropriate-intimacy"
      data-body_class="inappropriate-intimacy"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentInappropriateIntimacy />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default InappropriateIntimacyPage;
