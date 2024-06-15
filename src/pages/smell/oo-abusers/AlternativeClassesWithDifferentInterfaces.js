import Cart from "../../../components/cart/Cart";
import ContentAlternativeClassesWithDifferentInterfaces from "../../../components/content/refactoring/smell/oo-abusers/ContentAlternativeClassesWithDifferentInterfaces";
import ContentRefusedBequest from "../../../components/content/refactoring/smell/oo-abusers/ContentRefusedBequest";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const AlternativeClassesWithDifferentInterfacesPage = () => {
  return (
    <body
      class="locale-ru announcement alternative-classes-with-different-interfaces"
      data-body_class="alternative-classes-with-different-interfaces"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentAlternativeClassesWithDifferentInterfaces />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default AlternativeClassesWithDifferentInterfacesPage;
