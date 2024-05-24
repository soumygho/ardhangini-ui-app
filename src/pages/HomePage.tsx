import React from "react";
import Banner from "../components/Home/Banner";
import banner from "../images/desktop_banner.jpg";
import TrendingProducts from "../components/Home/TrendingProducts";
import Blogs from "../components/Home/Blogs";
import ServicePolicy from "../components/Home/ServicePolicy";
import Offers from "../components/Home/Offers";
import Testimonials from "../components/Home/Testimonials";

function HomePage() {
  return (
    <>
      <main>
        <Banner image={banner} />
        <TrendingProducts title="New Products" />
        <Offers />
        <TrendingProducts title="Top Seller" />
        <Testimonials />
        <ServicePolicy />
        <Blogs />
      </main>
    </>
  );
}

export default HomePage;
