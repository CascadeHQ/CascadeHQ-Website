// images
import AboutUsImage from "../images/AboutUs.jpg";

const MainAboutUsSection = () => {
  return (
    <>
      <main>
        <div className={`px-5 flex flex-col gap-y-10 pt-5 md:flex-row xl:flex-row md:gap-x-10 xl:gap-x-10 items-center xl:px-16 xl:py-14`}>
          <div className={`w-[100%]`}>
            <img
              src={AboutUsImage}
              alt="image"
              className={`rounded-lg w-[100%] h-[100%] md:w-[400px] md:h-[400px] xl:w-[620px] xl:h-[620px] `}
            />
          </div>
          <div className={`w-[100%]`}>
            <h1 className={`text-brandBlack1x font-bold text-3xl xl:text-[64px] leading-tight font-madeTommyExtraBold`}>About Us</h1>
            <div className={`mt-5 md:mt-2`}>
              <p className={`font-font-madeTommyThin text-sm font-normal xl:text-xl mb-5`}>
                some brief explanation, ok. some brief explanation, ok. some
                brief explanation, ok. some brief explanation, ok. some brief
                explanation, ok. some brief explanation, ok. some brief
                explanation, ok.
              </p>
              <p className={`font-font-madeTommyThin text-sm font-normal xl:text-xl mb-5`}>
                some brief explanation, ok. some brief explanation, ok. some
                brief explanation, ok. some brief explanation, ok. some brief
                explanation, ok. some brief explanation, ok. some brief
                explanation, ok.
              </p>
              <p className={`font-font-madeTommyThin text-sm font-normal xl:text-xl mb-5`}>
                some brief explanation, ok. some brief explanation, ok. some
                brief explanation, ok. some brief explanation, ok. some brief
                explanation, ok. some brief explanation, ok. some brief
                explanation, ok.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainAboutUsSection;
