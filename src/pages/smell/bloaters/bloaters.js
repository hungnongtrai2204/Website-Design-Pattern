import Cart from "../../../components/cart/Cart";
import ContentBloater from "../../../components/content/refactoring/smell/bloater/ContentBloater";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const BloatersPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentBloater />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default BloatersPage;
