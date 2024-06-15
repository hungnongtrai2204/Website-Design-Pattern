import Cart from "../../../components/cart/Cart";
import ContentDivergentChange from "../../../components/content/refactoring/smell/change-preventers/ContentDivergentChange";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const DivergentChangePage = () => {
  return (
    <body
      class="locale-ru announcement divergent-change"
      data-body_class="divergent-change"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDivergentChange />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DivergentChangePage;
