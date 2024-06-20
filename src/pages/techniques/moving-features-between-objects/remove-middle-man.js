import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentRemoveMiddleMan from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentRemoveMiddleMan";

const RemoveMiddleManPage = () => {
  return (
    <body
      class="locale-en announcement remove-middle-man"
      data-body_class="remove-middle-man"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentRemoveMiddleMan />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default RemoveMiddleManPage;
