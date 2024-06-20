import ContentComposingMethods from "../../../components/content/refactoring/techniques/composing-methods/ContentComposingMethods";
import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const ComposingMethodsPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentComposingMethods />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ComposingMethodsPage;
