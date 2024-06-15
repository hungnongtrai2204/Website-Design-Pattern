import Cart from "../../../components/cart/Cart";
import ContentChangePreventers from "../../../components/content/refactoring/smell/change-preventers/ContentChangePreventers";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const ChangePreventersPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentChangePreventers />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ChangePreventersPage;
