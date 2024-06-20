import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentReplaceMagicNumberwithSymbolicConstant from "../../../components/content/refactoring/techniques/organizing-data/ContentReplaceMagicNumberwithSymbolicConstant";

const ReplaceMagicNumberwithSymbolicConstantPage = () => {
  return (
    <body
      class="locale-en announcement replace-magic-number-with-symbolic-constant"
      data-body_class="replace-magic-number-with-symbolic-constant"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentReplaceMagicNumberwithSymbolicConstant />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ReplaceMagicNumberwithSymbolicConstantPage;
