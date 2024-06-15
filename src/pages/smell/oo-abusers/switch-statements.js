import Cart from "../../../components/cart/Cart";
import ContentSwitchStatements from "../../../components/content/refactoring/smell/oo-abusers/ContentSwitchStatements";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const SwitchStatementsPage = () => {
  return (
    <body
      class="locale-ru announcement switch-statements"
      data-body_class="switch-statements"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentSwitchStatements />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default SwitchStatementsPage;
