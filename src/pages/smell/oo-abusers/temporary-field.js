import Cart from "../../../components/cart/Cart";
import ContentTemporaryField from "../../../components/content/refactoring/smell/oo-abusers/ContentTemporaryField";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const TemporaryFieldPage = () => {
  return (
    <body
      class="locale-ru announcement temporary-field"
      data-body_class="temporary-field"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentTemporaryField />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default TemporaryFieldPage;
