import React from "react";

// Template
import Template from "../../widgets/Template";

// seo
import Seo from "../../components/seo/Seo";

const ContactUs = () => {
  return (
    <Template>
      <Seo
        title="Cascade | Home Page"
        description="description for about page"
        type="Website"
        name="Cascade"
      />
      <p className="px-5 lg:px-16">ContactUs</p>
    </Template>
  );
};

export default ContactUs;
