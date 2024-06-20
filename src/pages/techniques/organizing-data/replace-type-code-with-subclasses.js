import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceTypeCodewithSubclasses from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceTypeCodewithSubclassesPage";

const ReplaceTypeCodewithSubclassesPage = () => {
  return (
    <body
      class="locale-en announcement replace-type-code-with-subclasses"
      data-body_class="replace-type-code-with-subclasses"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceTypeCodewithSubclasses />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceTypeCodewithSubclassesPage;
