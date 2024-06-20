import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentChangeReferenceToValue from "../../../components/content/refactoring/techniques/organizing-data/ContentChangeReferenceToValue";

const ChangeReferenceToValuePage = () => {
  return (
    <body
      class="locale-en announcement change-reference-to-value"
      data-body_class="change-reference-to-value"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentChangeReferenceToValue />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ChangeReferenceToValuePage;
