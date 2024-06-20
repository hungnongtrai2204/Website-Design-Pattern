import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceTempWithQuery from "../../../components/content/refactoring/techniques/composing-methods/ContentReplaceTempWithQuery";

const ReplaceTempWithQueryPage = () => {
  return (
    <body
      class="locale-en announcement replace-temp-with-query"
      data-body_class="replace-temp-with-query"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceTempWithQuery />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceTempWithQueryPage;
