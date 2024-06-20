import Cart from "../../../components/cart/Cart";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentRemoveAssignmentsToParameters from "../../../components/content/refactoring/techniques/composing-methods/ContentRemoveAssignmentsToParameters";

const RemoveAssignmentsToParametersPage = () => {
  return (
    <body
      class="locale-en announcement remove-assignments-to-parameters"
      data-body_class="remove-assignments-to-parameters"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentRemoveAssignmentsToParameters />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default RemoveAssignmentsToParametersPage;
