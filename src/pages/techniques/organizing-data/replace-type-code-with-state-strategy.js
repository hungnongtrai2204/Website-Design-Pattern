import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceTypeCodewithStateStrategy from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceTypeCodewithStateStrategy";

const ReplaceTypeCodewithStateStrategyPage = () => {
  return (
    <body
      class="locale-en announcement replace-type-code-with-state-strategy"
      data-body_class="replace-type-code-with-state-strategy"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceTypeCodewithStateStrategy />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceTypeCodewithStateStrategyPage;
