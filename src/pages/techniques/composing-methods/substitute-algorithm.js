import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentSubstituteAlgorithm from "../../../components/content/refactoring/techniques/composing-methods/ContentSubstituteAlgorithm";

const SubstituteAlgorithmPage = () => {
  return (
    <body
      class="locale-en announcement substitute-algorithm"
      data-body_class="substitute-algorithm"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentSubstituteAlgorithm />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default SubstituteAlgorithmPage;
