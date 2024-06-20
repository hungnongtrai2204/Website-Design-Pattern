import Cart from "../../../components/cart/Cart";
import ContentMessageChains from "../../../components/content/refactoring/smell/couplers/ContentMessageChains";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Sidebar from "../../../components/sidebar/Sidebar";

const MessageChainsPage = () => {
  return (
    <body
      class="locale-ru announcement message-chains"
      data-body_class="message-chains"
    >
      <div className="body-holder">
        <Header />
        <Cart />
        <ContentMessageChains />
        <Navigation />
        <Sidebar />
        <Footer />
      </div>
    </body>
  );
};
export default MessageChainsPage;
