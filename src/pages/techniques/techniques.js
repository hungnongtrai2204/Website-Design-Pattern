import Cart from "../../components/cart/Cart";
import ContentTechniques from "../../components/content/refactoring/techniques/ContentTechniques";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Sidebar from "../../components/sidebar/Sidebar";

const TechniquesPage = () => {
  return (
    <body
      class="locale-ru announcement no-feature"
      data-body_class="no-feature "
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentTechniques />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default TechniquesPage;
