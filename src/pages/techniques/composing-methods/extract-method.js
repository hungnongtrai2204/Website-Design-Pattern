import ContentComposingMethods from "../../../components/content/refactoring/techniques/composing-methods/ContentComposingMethods";
import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentExtractMethod from "../../../components/content/refactoring/techniques/composing-methods/ContentExtractMethod";
import { Helmet } from "react-helmet";

const ExtractMethodPage = () => {
  return (
    <body
      class="locale-en announcement extract-method"
      data-body_class="extract-method"
    >
      {/* <Helmet>
        <script src="/public.min1749.js" type="text/javascript" />
      </Helmet> */}
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentExtractMethod />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ExtractMethodPage;
