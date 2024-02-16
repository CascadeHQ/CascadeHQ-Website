import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CatelogueSection from "./CatelogueSection";
import TestimoniesSection from "./TestimoniesSection";
import FaqSection from "../aboutUs/components/FaqSection";
import Seo from "../../components/seo/Seo";
import Banner from "./Banner";
import Template from "../../widgets/Template";

// interface Props = {}

const Home = () => {
  return (
    <Template>
      <>
        <Seo
          title="Cascade | Home Page"
          description="description for about page"
          type="Website"
          name="Cascade"
        />
        <HeroSection />
        <ServiceSection />
        <CatelogueSection />
        <TestimoniesSection />
        <Banner />
        <FaqSection />
      </>
    </Template>
  );
};

export default Home;
