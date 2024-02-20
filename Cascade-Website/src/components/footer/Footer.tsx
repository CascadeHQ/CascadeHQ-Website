import { Link } from "react-router-dom";
// import Logo from "../../assets/logo/CASCADE-LOGO-3.jpg";
import XLogo from "../../assets/images/x.png";
import InstaLogo from "../../assets/images/instagram.png";
import FacebookLogo from "../../assets/images/facebook.png";
import LinkedinLogo from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={`bg-brandBlue2x`}>
            <div className={`flex flex-col justify-center items-center`}>
                {/* <Link to={`/`}><img src={Logo} alt="Cascade Logo" className={`w-96`}/></Link> */}
                <div className={`flex gap-4`}>
                <Link to={`/`}><img src={LinkedinLogo} alt="Cascade Logo"/></Link>
                <Link to={`/`}><img src={XLogo} alt="Cascade Logo"/></Link>
                <Link to={`/`}><img src={FacebookLogo} alt="Cascade Logo"/></Link>
                <Link to={`/`}><img src={InstaLogo} alt="Cascade Logo"/></Link>

                </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
