import Cart from "../../../components/cart/Cart";
import ContentDispensables from "../../../components/content/refactoring/smell/dispensables/ContentDispensables";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const DispensablesPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDispensables />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DispensablesPage;
