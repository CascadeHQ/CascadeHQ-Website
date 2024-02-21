// images
import AboutHeroImage from "../images/aboutHero.jpg";
import StarImage from "../images/Star.svg";

const AboutHeroSection = () => {
  return (
    <>
      <main className={`bg-[url(/src/pages/aboutUs/images/Background.jpg)] bg-center bg-cover`}>
        <div
          className={`h-fit lg:h-[100%] flex flex-col px-5 mt-5 md:flex-row lg:flex-row lg:items-center lg:gap-x-36 lg:pl-16`}
        >
          <div className={`flex flex-col gap-y-3.5 lg:w-[50%]`}>
            <div>
              <h1
                className={`text-brandBlack1x font-bold text-3xl lg:text-[64px] leading-tight font-madeTommyExtraBold`}
              >
                We Teach,
              </h1>
              <h1
                className={`font-bold text-3xl lg:text-[64px] leading-tight font-madeTommyExtraBold`}
              >
                We Empower.
              </h1>
            </div>
            <div className={`flex items-center lg:items-start gap-x-4 lg:gap-x-8`}>
              <img src={StarImage} alt="star" className={`w-[18.92px] h-[19px] lg:w-[38.92px] lg:h-[39px]`}/>
              <p className={`font-madeTommyRegular font-normal text-md md:text-base  lg:font-bold w-full lg:w-[500px] lg:leading-5`}>
                And some set of body text to spice things up and better
                understanding. That’s all Init. And some set of body text to
                spice things up and better understanding. That’s all Init.{" "}
              </p>
            </div>
          </div>
          <div className={`w-full`}>
            <img src={AboutHeroImage} alt="image" />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutHeroSection;
