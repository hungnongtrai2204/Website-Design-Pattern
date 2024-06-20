import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentEncapsulateField from "../../../components/content/refactoring/techniques/organizing-data/ContentEncapsulateField";

const EncapsulateFieldPage = () => {
  return (
    <body
      class="locale-en announcement encapsulate-field"
      data-body_class="encapsulate-field"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentEncapsulateField />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default EncapsulateFieldPage;
