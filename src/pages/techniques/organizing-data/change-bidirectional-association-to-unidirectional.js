import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentChangeBidirectionalAssociationtoUnidirectional from "../../../components/content/refactoring/techniques/organizing-data/ContentChangeBidirectionalAssociationtoUnidirectional";

const ChangeBidirectionalAssociationtoUnidirectionalPage = () => {
  return (
    <body
      class="locale-en announcement change-bidirectional-association-to-unidirectional"
      data-body_class="change-bidirectional-association-to-unidirectional"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentChangeBidirectionalAssociationtoUnidirectional />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ChangeBidirectionalAssociationtoUnidirectionalPage;
