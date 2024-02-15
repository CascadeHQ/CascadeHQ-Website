import React from "react";
import Template from "../../widgets/Template";
import Seo from "../../components/seo/Seo";

// components
import AboutHeroSection from "./components/AboutHeroSection";

const AboutUs = () => {
  return (
    <Template>
      <>
        <Seo
          title="Cascade | About Us Page"
          description="description for about page"
          type="Website"
          name="Cascade"
        />
        <AboutHeroSection/>
      </>
    </Template>
  );
};

export default AboutUs;
