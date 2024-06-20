import Cart from "../../../components/cart/Cart";
import ContentFeatureEnvy from "../../../components/content/refactoring/smell/couplers/ContentFeatureEnvy";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const FeatureEnvyPage = () => {
  return (
    <body
      class="locale-ru announcement feature-envy"
      data-body_class="feature-envy"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentFeatureEnvy />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default FeatureEnvyPage;
