import Cart from "../../../components/cart/Cart";
import ContentDeadCode from "../../../components/content/refactoring/smell/dispensables/ContentDeadCode";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const DeadCodePage = () => {
  return (
    <body class="locale-ru announcement dead-code" data-body_class="dead-code">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDeadCode />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DeadCodePage;
