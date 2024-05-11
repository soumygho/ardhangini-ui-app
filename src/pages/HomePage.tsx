import React from "react";
import Banner from "../components/Banner";
import banner from "../images/desktop_banner.jpg";
import TrendingProducts from "../components/TrendingProducts";

function HomePage() {
  return (
    <>
      <Banner image={banner} />
      <TrendingProducts />
    </>
  );
}

export default HomePage;
