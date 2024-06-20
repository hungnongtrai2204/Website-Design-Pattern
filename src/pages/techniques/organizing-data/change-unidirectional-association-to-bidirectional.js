import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentChangeUnidirectionalAssociationToBidirectional from "../../../components/content/refactoring/techniques/organizing-data/ContentChangeUnidirectionalAssociationToBidirectional";

const ChangeUnidirectionalAssociationToBidirectionalPage = () => {
  return (
    <body
      class="locale-en announcement change-unidirectional-association-to-bidirectional"
      data-body_class="change-unidirectional-association-to-bidirectional"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentChangeUnidirectionalAssociationToBidirectional />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ChangeUnidirectionalAssociationToBidirectionalPage;
