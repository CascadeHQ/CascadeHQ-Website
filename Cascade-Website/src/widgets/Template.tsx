import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

const Template = ({ children }) => {
  return (
    <main>
      <NavBar />
      <section className={``}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Template;
