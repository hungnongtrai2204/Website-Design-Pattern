import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentIntroduceForeignMethod from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentIntroduceForeignMethod";

const IntroduceForeignMethodPage = () => {
  return (
    <body
      class="locale-en announcement introduce-foreign-method"
      data-body_class="introduce-foreign-method"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentIntroduceForeignMethod />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default IntroduceForeignMethodPage;
