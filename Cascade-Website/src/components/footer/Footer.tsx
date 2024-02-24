import Logo from "../../assets/logo/CASCADE LOGO TRANSAPARENT-2.png";
import FooterImage from "../../assets/images/footer.jpg";
import arrowIcon from "../../assets/images/Arrow.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // page links
  const pageLinks = [
    {
      page: "Home",
      link: "",
    },
    {
      page: "About us",
      link: "",
    },
    {
      page: "Programs",
      link: "",
    },
    {
      page: "Contact us",
      link: "",
    },
  ];

  // resources link
  const resourcesLink = [
    {
      page: "FAQ",
      link: "",
    },
    {
      page: "Gallery",
      link: "",
    },
    {
      page: "Support",
      link: "",
    },
  ];
  return (
    <>
      <footer className={`bg-brandBlue2x`}>
        <div
          className={`font-euclidRegular flex flex-col gap-y-12 md:flex-row lg:flex-row md:justify-between lg:justify-between md:mr-[20%] lg:mr-[20%] px-5 py-10 my-0 mx-auto lg:p-16`}
        >
          <div className="flex flex-col gap-y-2.5">
            <img src={Logo} alt="Cascade logo" className={`w-[70%]`}/>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-y-12 lg:gap-x-12">
            <div>
              <h3 className="text-xl lg:text-2xl font-valueBlack">Pages</h3>
              <div className="flex flex-col gap-y-2.5 mt-2">
                {pageLinks.map((page) => (
                  <NavLink to={page.link}>
                    <p className="font-valueMedium flex items-center gap-x-1 text-sm lg:text-base font-medium">
                      <img
                        src={arrowIcon}
                        alt="icon"
                        className="w-[7.26px] h-[12px]"
                      />
                      {page.page}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-valueBlack">Resources</h3>
              <div className="flex flex-col gap-y-2.5 mt-2">
                {resourcesLink.map((resource) => (
                  <NavLink to={resource.link}>
                    <p className="font-valueMedium flex items-center gap-x-1 text-sm lg:text-base font-medium">
                      <img
                        src={arrowIcon}
                        alt="icon"
                        className="w-[7.26px] h-[12px]"
                      />
                      {resource.page}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brandBlue5x p-5 text-center">
          <p className="font-valueRegular text-white text-sm lg:text-base">With Love from Cascade, 2023. All rights researved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
