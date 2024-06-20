import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentChangeValueToReference from "../../../components/content/refactoring/techniques/organizing-data/ContentChangeValueToReference";

const ChangeValueToReferencePage = () => {
  return (
    <body
      class="locale-en announcement change-value-to-reference"
      data-body_class="change-value-to-reference"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentChangeValueToReference />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ChangeValueToReferencePage;
