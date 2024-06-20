import Cart from "../../../components/cart/Cart";
import ContentSpeculativeGenerality from "../../../components/content/refactoring/smell/dispensables/ContentSpeculativeGenerality";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const SpeculativeGeneralityPage = () => {
  return (
    <body
      class="locale-ru announcement speculative-generality"
      data-body_class="speculative-generality"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentSpeculativeGenerality />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default SpeculativeGeneralityPage;
