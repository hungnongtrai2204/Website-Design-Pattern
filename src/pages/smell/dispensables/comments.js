import Cart from "../../../components/cart/Cart";
import ContentComments from "../../../components/content/refactoring/smell/dispensables/ContentComments";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const CommentsPage = () => {
  return (
    <body class="locale-ru announcement comments" data-body_class="comments">
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentComments />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default CommentsPage;
