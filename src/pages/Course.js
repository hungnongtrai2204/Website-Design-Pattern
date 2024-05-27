import Cart from "../components/cart/Cart";
import ContentHome from "../components/content/home/ContentHome";
import ContentCourse from "../components/content/store/ContentCourse";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";

const CoursePage = () => {
  return (
    <body
      class="locale-ru    announcement   landing-refactoring "
      data-body_class="landing-refactoring "
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentCourse />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default CoursePage;
