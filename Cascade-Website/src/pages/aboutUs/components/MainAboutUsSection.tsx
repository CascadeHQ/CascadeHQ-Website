// images
import AboutUsImage from "../images/AboutUs.jpg";

const MainAboutUsSection = () => {
  return (
    <>
      <main>
        <div className={`px-5 flex flex-col gap-y-10 pt-5 xl:flex-row xl:gap-x-10 items-center xl:px-16 xl:py-14`}>
          <div className={`w-[100%]`}>
            <img
              src={AboutUsImage}
              alt="image"
              className={`rounded-lg w-[100%] h-[100%] md:w-[620px] md:h-[620px] xl:w-[620px] xl:h-[620px] `}
            />
          </div>
          <div className={`w-[100%]`}>
            <h1 className={`font-bold text-3xl xl:text-[64px] leading-tight madeTommyRegular`}>About Us</h1>
            <div className={`mt-5`}>
              <p className={`madeTommyRegular font-normal xl:text-xl mb-5`}>
                some brief explanation, ok. some brief explanation, ok. some
                brief explanation, ok. some brief explanation, ok. some brief
                explanation, ok. some brief explanation, ok. some brief
                explanation, ok.
              </p>
              <p className={`madeTommyRegular font-normal xl:text-xl mb-5`}>
                some brief explanation, ok. some brief explanation, ok. some
                brief explanation, ok. some brief explanation, ok. some brief
                explanation, ok. some brief explanation, ok. some brief
                explanation, ok.
              </p>
              <p className={`madeTommyRegular font-normal xl:text-xl mb-5`}>
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
