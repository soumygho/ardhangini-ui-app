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
import useCategories from "./hooks/api/useCategories";
import useCollections from "./hooks/api/useCollections";
import useColors from "./hooks/api/useColors";
import useFabrics from "./hooks/api/useFabrics";
import usePrints from "./hooks/api/usePrints";
import useProductOccassions from "./hooks/api/useProductOccassions";
import useStyles from "./hooks/api/useStyles";
import useSubCategories from "./hooks/api/useSubCategories";

function App() {
  const { shouldShowLoginModal, handleModalClose, showLoginModal } =
    useLoginModal();

  const { categories, getAllCategories } = useCategories();
  const { collections, getAllCollections } = useCollections();
  const { productColors, getAllProductColors } = useColors();
  const { productFabrics, getAllProductFabrics } = useFabrics();
  const { productPrints, getAllProductPrints } = usePrints();
  const { productOccassions, getAllProductOccassions } = useProductOccassions();
  const { productStyles, getAllProductStyles } = useStyles();
  const { subcategories, getAllSubCategories } = useSubCategories();

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
    userId: undefined,
    categories: [],
    subCategories: [],
    collections: [],
    fabrics: [],
    colors: [],
    syles: [],
    prints: [],
    occassions: [],
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
