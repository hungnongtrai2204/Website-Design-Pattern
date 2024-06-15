import Cart from "../../../components/cart/Cart";
import ContentParallelInheritanceHierarchies from "../../../components/content/refactoring/smell/change-preventers/parallel-inheritance-hierarchies";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const ParallelInheritanceHierarchiesPage = () => {
  return (
    <body
      class="locale-ru announcement parallel-inheritance-hierarchies"
      data-body_class="parallel-inheritance-hierarchies"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentParallelInheritanceHierarchies />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default ParallelInheritanceHierarchiesPage;
