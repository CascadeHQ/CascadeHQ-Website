// images
import AboutUsImage from "../images/lady_chcomw.png";

const MainAboutUsSection = () => {
  return (
    <>
      <main>
        <div
          className={`px-5 flex flex-col gap-y-10 pt-5 md:flex-row lg:flex-row md:gap-x-10 lg:gap-x-10 items-center lg:px-16 lg:py-14`}
        >
          <div className={`w-[100%]`}>
            <img
              src={AboutUsImage}
              alt="image"
              className={`rounded-lg w-[100%] h-[100%] md:w-[400px] md:h-[400px] lg:w-[620px] lg:h-[620px] `}
            />
          </div>
          <div className={`w-[100%]`}>
            <h1
              className={`text-brandBlack1x text-3xl xl:text-[64px] leading-tight font-DegularDiplayBold`}
            >
              About Us
            </h1>
            <div className={`mt-5 md:mt-2 font-TrapRegular`}>
              <p className={` text-sm font-normal xl:text-xl mb-5`}>
                Your kids can have a lot of fun while learning about technology.
                They need kid-friendly resources out there that can spark their
                curiosity and get them excited about the world of tech and
                that's where Cascade comes in.
              </p>
              <p className={` text-sm font-normal xl:text-xl mb-5`}>
                Technology is an integral part of our world so why not give your
                kids a head start on their tech education? Whether they are
                interested in coding, design or even just learning about the
                basics of how technology works, Cascade offers them the
                resources to help them get started So don't wait -
              </p>
              <p className={` text-sm font-normal xl:text-xl mb-5`}>
              Our commitment to excellence and innovation has established Cascade as a pioneer in the field of IT training.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainAboutUsSection;
