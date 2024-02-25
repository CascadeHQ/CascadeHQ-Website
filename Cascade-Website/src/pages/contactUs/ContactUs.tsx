
// Template
import Template from "../../widgets/Template";

// seo
import Seo from "../../components/seo/Seo";
import ContactText from "./components/ContactText";
import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  return (
    <Template>
      <Seo
        title="Cascade | Home Page"
        description="description for about page"
        type="Website"
        name="Cascade"
      />
      <div className="px-5 mb-16 flex flex-col gap-y-14 lg:gap-x-14 md:gap-x-8 md:flex-row lg:flex-row lg:px-16">
        <ContactText/>
        <ContactForm/>
      </div>
    </Template>
  );
};

export default ContactUs;
