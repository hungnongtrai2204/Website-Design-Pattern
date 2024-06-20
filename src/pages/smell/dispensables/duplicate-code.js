import Cart from "../../../components/cart/Cart";
import ContentDuplicateCode from "../../../components/content/refactoring/smell/dispensables/ContentDuplicateCode";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const DuplicateCodePage = () => {
  return (
    <body
      class="locale-ru announcement duplicate-code"
      data-body_class="duplicate-code"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDuplicateCode />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DuplicateCodePage;
