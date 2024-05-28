import Cart from "../components/cart/Cart";
import ContentTechnicalDebt from "../components/content/refactoring/ContentTechnicalDebt";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const TechnicalDebtPage = () => {
  return (
    <body class="locale-ru announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentTechnicalDebt />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default TechnicalDebtPage;
