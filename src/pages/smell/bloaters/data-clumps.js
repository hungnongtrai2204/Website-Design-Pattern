import Cart from "../../../components/cart/Cart";
import ContentDataClumps from "../../../components/content/refactoring/smell/bloater/ContentDataClumps";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const DataClumpsPage = () => {
  return (
    <body
      class="locale-ru announcement data-clumps"
      data-body_class="data-clumps"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDataClumps />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DataClumpsPage;
