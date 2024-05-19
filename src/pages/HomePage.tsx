import React from "react";
import Banner from "../components/Home/Banner";
import banner from "../images/desktop_banner.jpg";
import TrendingProducts from "../components/Home/TrendingProducts";
import Blogs from "../components/Home/Blogs";
import ServicePolicy from "../components/Home/ServicePolicy";

function HomePage() {
  return (
    <>
      <Banner image={banner} />
      <TrendingProducts />
      <ServicePolicy />
      <Blogs />
    </>
  );
}

export default HomePage;
