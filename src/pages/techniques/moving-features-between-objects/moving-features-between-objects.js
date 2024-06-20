import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentMovingFeaturesBetweenObjects from "../../../components/content/refactoring/techniques/moving-features-between-objects/ContentMovingFeaturesBetweenObjects";

const MovingFeaturesBetweenObjectsPage = () => {
  return (
    <body class="locale-en announcement" data-body_class="">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentMovingFeaturesBetweenObjects />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default MovingFeaturesBetweenObjectsPage;
