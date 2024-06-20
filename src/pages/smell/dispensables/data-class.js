import Cart from "../../../components/cart/Cart";
import ContentDataClass from "../../../components/content/refactoring/smell/dispensables/ContentDataClass";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const DataClassPage = () => {
  return (
    <body
      class="locale-ru announcement data-class"
      data-body_class="data-class"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentDataClass />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default DataClassPage;
