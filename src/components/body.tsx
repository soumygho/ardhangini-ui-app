import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import OfferPage from "../pages/OfferPage";
import GiftCardpage from "../pages/GiftCardpage";
import ReadyToShipPage from "../pages/ReadyToShipPage";
import NoPage from "../pages/NoPage";
import NewArrivals from "../pages/NewArrivals";
import SareesPage from "../pages/SareesPage";

function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="collections" element={<ProductListPage />} />
          <Route path="offers" element={<OfferPage />} />
          <Route path="giftcards" element={<GiftCardpage />} />
          <Route path="readytoship" element={<ReadyToShipPage />} />
          <Route path="newarrivals" element={<NewArrivals />} />
          <Route path="sarees" element={<SareesPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Layout />
    </>
  );
}

export default Body;
