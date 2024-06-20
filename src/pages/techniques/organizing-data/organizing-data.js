import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentOrganizingData from "../../../components/content/refactoring/techniques/organizing-data/ContentOrganizingData";

const OrganizingDataPage = () => {
  return (
    <body class="locale-en announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentOrganizingData />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default OrganizingDataPage;
