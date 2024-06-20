import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentIntroduceLocalExtension from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentIntroduceLocalExtension";

const IntroduceLocalExtensionPage = () => {
  return (
    <body
      class="locale-en announcement introduce-local-extension"
      data-body_class="introduce-local-extension"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentIntroduceLocalExtension />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default IntroduceLocalExtensionPage;
