import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentDuplicateObservedData from "../../../components/content/refactoring/techniques/organizing-data/ContentDuplicateObservedDataPage";

const DuplicateObservedDataPage = () => {
  return (
    <body
      class="locale-en announcement duplicate-observed-data"
      data-body_class="duplicate-observed-data"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDuplicateObservedData />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DuplicateObservedDataPage;
