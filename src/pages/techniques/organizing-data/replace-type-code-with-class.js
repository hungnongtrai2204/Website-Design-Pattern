import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceTypeCodewithClass from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceTypeCodewithClass";

const ReplaceTypeCodewithClassPage = () => {
  return (
    <body
      class="locale-en announcement replace-type-code-with-class"
      data-body_class="replace-type-code-with-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceTypeCodewithClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceTypeCodewithClassPage;
