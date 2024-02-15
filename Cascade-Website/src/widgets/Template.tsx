import React, { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
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
