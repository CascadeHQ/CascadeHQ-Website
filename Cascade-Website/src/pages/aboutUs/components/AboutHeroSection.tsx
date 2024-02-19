// images
import AboutHeroImage from "../images/aboutHero.jpg";
import StarImage from "../images/Star.svg";

const AboutHeroSection = () => {
  return (
    <>
      <main className={`bg-[url(/src/pages/aboutUs/images/Background.jpg)] bg-center bg-cover`}>
        <div
          className={`h-fit flex flex-col px-5 mt-5 xl:flex-row xl:items-center xl:gap-x-36 xl:pl-16`}
        >
          <div className={`flex flex-col gap-y-3.5`}>
            <div>
              <h1
                className={`text-brandBlack1x font-bold text-3xl xl:text-[64px] leading-tight font-madeTommyExtraBold`}
              >
                We Teach,
              </h1>
              <h1
                className={`font-bold text-3xl xl:text-[64px] leading-tight font-madeTommyExtraBold`}
              >
                We Empower.
              </h1>
            </div>
            <div className={`flex items-center xl:items-start gap-x-4 xl:gap-x-8`}>
              <img src={StarImage} alt="star" className={`w-[18.92px] h-[19px] xl:w-[38.92px] xl:h-[39px]`}/>
              <p className={`font-madeTommyRegular font-normal text-md md:text-base  xl:font-bold w-full xl:w-[500px] xl:leading-5`}>
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
