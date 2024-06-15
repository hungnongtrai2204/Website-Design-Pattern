import Cart from "../../../components/cart/Cart";
import ContentShotgunSurgery from "../../../components/content/refactoring/smell/change-preventers/ContentShotgunSurgery";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const ShotgunSurgeryPage = () => {
  return (
    <body
      class="locale-ru announcement shotgun-surgery"
      data-body_class="shotgun-surgery"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentShotgunSurgery />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ShotgunSurgeryPage;
