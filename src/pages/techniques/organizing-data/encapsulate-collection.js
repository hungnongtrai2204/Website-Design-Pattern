import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentEncapsulateCollection from "../../../components/content/refactoring/techniques/organizing-data/ContentEncapsulateCollection";

const EncapsulateCollectionPage = () => {
  return (
    <body
      class="locale-en announcement encapsulate-collection"
      data-body_class="encapsulate-collection"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentEncapsulateCollection />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default EncapsulateCollectionPage;
