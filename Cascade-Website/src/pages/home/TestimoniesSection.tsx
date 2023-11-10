import React from "react";
import Profile from "../../assets/images/profile.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// interface Props = {}

const TestimoniesSection = () => {
  return (
    <>
      <section>
        <article className={`grid grid-cols-1 justify-center items-center gap-10 py-12`}>
          <div className={`flex items-center justify-center`}>
            <div>
              <h2 className={`text-xl font-ruberoidBold pb-2 md:text-3xl`}>
                Why it is best to start <br /> early?
              </h2>
              <p className={`font-madeTommyRegular`}>Sneak peak - From Techies who started their journey early!</p>
            </div>
          </div>
          <section className={``}>
            <div className={`flex gap-5 px-5`}>
              <div className={`grid grid-cols-1 gap-4 w-5/6 justify-center items-center  mx-auto  bg-brandWhite1x/80 p-5 px-10 rounded-xl shadow-xl`}>
                <p className={`text-5xl font-ruberoidBold`}>"</p>
                <div className={`flex gap-4`}>
                  <img src={Profile} alt="Cascade: Profile images" className={`w-[10g%]`}/>
                  <div >
                    <p className={`text-md font-ruberoidRegular`}>Fullname</p>
                    <p className={`text-md font-ruberoidRegular`}>Role / Skill</p>
                    <p className={`text-md font-ruberoidRegular`}>Twitter handle</p>
                  </div>
                </div>
                <p className={`text-md font-ruberoidRegular`}>
                  Just a story of a young individual who had primary education
                  of tech and how it sharped his entire career. Just a story of
                  a young individual who had primary education of tech and how
                  it sharped his entire career. Just a story of a young
                  individual who had primary education of tech.
                </p>
              </div>
              <div className={`grid grid-cols-1 gap-4 w-5/6 justify-center items-center  mx-auto  bg-brandWhite1x/80 p-5 px-10 rounded-xl shadow-xl`}>
                <p className={`text-5xl font-ruberoidBold`}>"</p>
                <div className={`flex gap-4`}>
                  <img src={Profile} alt="Cascade: Profile images" className={`w-[10g%]`}/>
                  <div >
                    <p className={`text-md font-ruberoidRegular`}>Fullname</p>
                    <p className={`text-md font-ruberoidRegular`}>Role / Skill</p>
                    <p className={`text-md font-ruberoidRegular`}>Twitter handle</p>
                  </div>
                </div>
                <p className={`text-md font-ruberoidRegular`}>
                  Just a story of a young individual who had primary education
                  of tech and how it sharped his entire career. Just a story of
                  a young individual who had primary education of tech and how
                  it sharped his entire career. Just a story of a young
                  individual who had primary education of tech.
                </p>
              </div>
              <div className={`grid grid-cols-1 gap-4 w-5/6 justify-center items-center  mx-auto  bg-brandWhite1x/80 p-5 px-10 rounded-xl shadow-xl`}>
                <p className={`text-5xl font-ruberoidBold`}>"</p>
                <div className={`flex gap-4`}>
                  <img src={Profile} alt="Cascade: Profile images" className={`w-[10g%]`}/>
                  <div >
                    <p className={`text-md font-ruberoidRegular`}>Fullname</p>
                    <p className={`text-md font-ruberoidRegular`}>Role / Skill</p>
                    <p className={`text-md font-ruberoidRegular`}>Twitter handle</p>
                  </div>
                </div>
                <p className={`text-md font-ruberoidRegular`}>
                  Just a story of a young individual who had primary education
                  of tech and how it sharped his entire career. Just a story of
                  a young individual who had primary education of tech and how
                  it sharped his entire career. Just a story of a young
                  individual who had primary education of tech.
                </p>
              </div>
              
            </div>
          </section>
        </article>
      </section>
    </>
  );
};

export default TestimoniesSection;
