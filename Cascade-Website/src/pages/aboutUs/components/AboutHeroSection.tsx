// images
import AboutHeroImage from "../images/aboutHero.jpg";
import StarImage from "../images/Star.svg";

const AboutHeroSection = () => {
  return (
    <>
      <main
        className={`bg-[url(/src/pages/aboutUs/images/Background.jpg)] bg-center bg-cover`}
      >
        <div
          className={`h-fit lg:h-[100%] flex flex-col px-5 mt-5 md:flex-row lg:flex-row lg:items-center lg:gap-x-36 lg:pl-16`}
        >
          <div className={`flex flex-col gap-y-3.5 lg:w-[50%]`}>
            <div>
              <h1
                className={`text-brandBlack1x font-bold text-5xl md:text-6xl lg:text-7xl leading-tight font-DegularDiplayBlack`}
              >
                We are Building,
              </h1>
              <h1
                className={`font-bold text-5xl md:text-6xl lg:text-7xl leading-tight font-DegularDiplayBlack`}
              >
                to Redefine.
              </h1>
            </div>
            <div
              className={`flex items-center lg:items-start gap-x-4 lg:gap-x-8`}
            >
              <img
                src={StarImage}
                alt="star"
                className={`w-[18.92px] h-[19px] xl:w-[38.92px] xl:h-[39px]`}
              />
              <p
                className={`text-base text-brandGray3x font-TrapRegular leading-7  md:text-lg md:leading-8 lg:leading-9  w-full lg:w-[500px]`}
              >
                As an innovative EdTech startup, we are committed to
                revolutionizing the way education is accessed and experienced.
                With a focus on cutting-edge technology and forward-thinking
                approaches, we strive to break down barriers and create new
                opportunities for learners everywhere.{" "}
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
