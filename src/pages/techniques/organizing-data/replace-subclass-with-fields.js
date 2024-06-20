import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceSubclasswithFields from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceSubclasswithFields";

const ReplaceSubclasswithFieldsPage = () => {
  return (
    <body
      class="locale-en announcement replace-subclass-with-fields"
      data-body_class="replace-subclass-with-fields"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceSubclasswithFields />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceSubclasswithFieldsPage;
