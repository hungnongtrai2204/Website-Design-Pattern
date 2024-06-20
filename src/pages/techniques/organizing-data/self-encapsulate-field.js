import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentSelfEncapsulateField from "../../../components/content/refactoring/techniques/organizing-data/ContentSelfEncapsulateField";

const SelfEncapsulateFieldPage = () => {
  return (
    <body
      class="locale-en announcement self-encapsulate-field"
      data-body_class="self-encapsulate-field"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentSelfEncapsulateField />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default SelfEncapsulateFieldPage;
