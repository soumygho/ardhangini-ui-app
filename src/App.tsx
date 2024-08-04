import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/color.css";
import "./css/style.css";
import "./css/style-new.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Body from "./components/layout/body";
//import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import useLoginModal from "./hooks/useLoginModal";
import LoginModal from "./pages/modals/LoginModal";
import { rootContext, RootContext } from "./context/root.context";

function App() {
  const { shouldShowLoginModal, handleModalClose, showLoginModal } =
    useLoginModal();
  const rootContextData: RootContext = {
    showLoginModal: shouldShowLoginModal,
    handleShowLoginModal: showLoginModal,
    handleLoginCloseModal: handleModalClose,
    handleAddToCart: function (productid: string): void {
      console.log(`Add to cart handler for product id: ${productid}`);
    },
    handleAddToWishList: function (productid: string): void {
      console.log(`Add to wishlist handler for product id: ${productid}`);
    },
    removeFromCart: function (productid: string): void {
      console.log(`remove from cart for product id: ${productid}`);
    },
    removeFromWishList: function (productid: string): void {
      console.log(`remove from wishlist for product id: ${productid}`);
    },
    cartId: undefined,
    userId: undefined
  };
  return (
    <>
      <rootContext.Provider value={rootContextData}>
        <Router>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </Router>
        <LoginModal></LoginModal>
      </rootContext.Provider>
    </>
  );
}

export default App;
