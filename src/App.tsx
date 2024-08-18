import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/color.css";
import "./css/style.css";
import "./css/style-new.css";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Body from "./components/layout/body";
//import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import useLoginModal from "./hooks/useLoginModal";
import LoginModal from "./pages/modals/LoginModal";
import {
  config,
  handleApiError,
  rootContext,
  RootContext,
} from "./context/root.context";
import useCategories from "./hooks/api/useCategories";
import useCollections from "./hooks/api/useCollections";
import useColors from "./hooks/api/useColors";
import useFabrics from "./hooks/api/useFabrics";
import usePrints from "./hooks/api/usePrints";
import useProductOccassions from "./hooks/api/useProductOccassions";
import useStyles from "./hooks/api/useStyles";
import useSubCategories from "./hooks/api/useSubCategories";
import {
  CartLineItemDto,
  CartUpdateDto,
  SareeFilter,
  UserAuthApi,
  WishListUpdateDto,
} from "./services/openapi";
import useCartApi from "./hooks/api/useCartApi";
import useWishListApi from "./hooks/api/useWishListApi";
import { ToastContainer } from "react-toastify";
import useUserAuthApi from "./hooks/api/useAuthApi";

function App() {
  const { shouldShowLoginModal, handleModalClose, showLoginModal } =
    useLoginModal();
  const [primaryFilter, setPrimaryFilter] = useState<SareeFilter>();

  const { categories, getAllCategories } = useCategories();
  const { collections, getAllCollections } = useCollections();
  const { productColors, getAllProductColors } = useColors();
  const { productFabrics, getAllProductFabrics } = useFabrics();
  const { productPrints, getAllProductPrints } = usePrints();
  const { productOccassions, getAllProductOccassions } = useProductOccassions();
  const { productStyles, getAllProductStyles } = useStyles();
  const { subcategories, getAllSubCategories } = useSubCategories();
  const { getCartDetails, addToCart, removeFromCart } = useCartApi();
  const { addToWishList, removeFromWishList } = useWishListApi();

  const [userId, setUserId] = useState(""); //ed232079-582d-414c-8045-d08552211cc4
  const [isAccesstokenExpired, setIsAccessTokenExpired] = useState(false);
  const { setAuthentication } = useUserAuthApi();
  useEffect(() => {
    setAuthentication().then((data) => {
      console.trace("userid : " + data);
      setUserId(() => data);
    });
  });
  useEffect(() => {
    getAllCategories();
    getAllCollections();
    getAllProductColors();
    getAllProductFabrics();
    getAllProductPrints();
    getAllProductOccassions();
    getAllProductStyles();
    getAllSubCategories();
  }, [config]);

  useEffect(() => {
    if (userId) {
      getCartDetails(userId);
    }
  }, [userId]);

  const rootContextData: RootContext = {
    userId: userId,
    showLoginModal: shouldShowLoginModal,
    handleShowLoginModal: showLoginModal,
    handleLoginCloseModal: handleModalClose,
    handleAddToCart: function (lineItems: CartLineItemDto[]): void {
      //console.trace(`Add to cart handler for product id: ${productid}`);
      if (!userId) {
        showLoginModal();
      } else {
        const dto: CartUpdateDto = {
          userId: userId,
          lineItems: lineItems,
        };
        addToCart(dto);
      }
    },
    handleAddToWishList: function (productid: string, typeId: string): void {
      console.trace(`Add to wishlist handler for product id: ${productid}`);
      if (!userId) {
        showLoginModal();
      } else {
        const dto: WishListUpdateDto = {
          userId: userId,
          lineItems: [
            {
              productId: productid,
              typeId: typeId,
            },
          ],
        };
        addToWishList(dto);
      }
    },
    removeFromCart: function (productid: string, productTypeId: string): void {
      console.trace(`remove from cart for product id: ${productid}`);
      if (!userId) {
        showLoginModal();
      } else {
        const dto: CartUpdateDto = {
          userId: userId,
          lineItems: [
            {
              productId: productid,
              quantity: 1,
              typeId: productTypeId,
            },
          ],
        };
        removeFromCart(dto);
      }
    },
    removeFromWishList: function (
      productid: string,
      productTypeId: string
    ): void {
      console.trace(`remove from wishlist for product id: ${productid}`);
      if (!userId) {
        showLoginModal();
      } else {
        const dto: WishListUpdateDto = {
          userId: userId,
          lineItems: [
            {
              productId: productid,
              typeId: productTypeId,
            },
          ],
        };
        removeFromWishList(dto);
      }
    },
    cartId: undefined,
    categories: categories,
    subCategories: subcategories,
    collections: collections,
    fabrics: productFabrics,
    colors: productColors,
    syles: productStyles,
    prints: productPrints,
    occassions: productOccassions,
    selectedPrimarySareeFilter: primaryFilter,
    setPrimaryFilter: function (filter: SareeFilter): void {
      setPrimaryFilter(() => filter);
    },
    setUserId: function (userId: string): void {
      setUserId(() => userId);
    },
    isAccessTokenExpired: isAccesstokenExpired,
    setIsAccessTokenExpired: function (flag: boolean): void {
      setIsAccessTokenExpired(() => flag);
    },
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
        <ToastContainer />
      </rootContext.Provider>
    </>
  );
}

export default App;
