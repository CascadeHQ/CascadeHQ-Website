import Profile from "../images/profile.png";

// interface Props = {}

const TestimoniesSection = () => {
  const testimonies = [
    {
      author: "Henry Agu",
      testimony:
        "Starting early laid the foundation for my tech career. As ateenager, diving into coding and robotics sparked my passion fortechnology, setting me on a trajectory towards success in the industry.",
      profession: "FrontEnd Developer",
    },
    {
      author: "Ediomo Jose",
      testimony:
        "Early exposure to technology opened doors I never imagined. From building my first website in middle school to developing apps in high school, those early experiences equipped me with the skills and confidence to thrive in the tech world",
      profession: "Software Developer",
    },
    {
      author: "Kalu Daniel",
      testimony:
        "Beginning my tech journey early gave me a competitive edge. By the time I entered college, I had already interned at tech companies and contributed to open-source projects, positioning myself as a standout candidate for future opportunities",
      profession: "Software Developer",
    },
    {
      author: "Philip Anthony",
      testimony:
        "Starting early allowed me to make mistakes and learn from them. As a young entrepreneur experimenting with different tech ventures, I gained invaluable insights and resilience that continue to shape my approach to innovation and problem-solving.",
      profession: "Software Developer",
    },
    {
      author: "Ozor Bryan",
      testimony:
        "Early immersion in tech cultivated a lifelong passion for learning. From tinkering with hardware to exploring the latest programming languages, my journey from a young age instilled in me a curiosity and hunger for knowledge that drives me forward every day.",
      profession: "Software Developer",
    },
  ];
  return (
    <>
      <section>
        <article
          className={`grid grid-cols-1 justify-center items-center gap-10 py-12 `}
        >
          <div
            className={`flex items-center justify-center px-5 md:px-10 lg:px-20`}
          >
            <div>
              <p className={`text-brandBlue1x font-valueBold py-3`}>
                Sneak Peak - From Techies who started their journey early!
              </p>
              <h2
                className={`text-4xl font-DegularDiplayBold pb-2 md:text-5xl lg:text-6xl`}
              >
                Why it is best to start <br /> early?
              </h2>
            </div>
          </div>
          <section
            className={`flex items-center  py-4 mx-5   gap-3 overflow-x-scroll snap-mandatory snap-x no-scrollbar lg:px-20 lg:mx-10`}
          >
            {testimonies.map((testimony, index) => (
              <div
                className={`grid grid-cols-1 gap-4 justify-center items-center w-full  shrink-0   bg-brandWhite1x/80 p-5 px-10 rounded-xl shadow-xl md:w-2/5`}
                key={index}
              >
                <p className={`text-6xl font-euclidItalicBold`}>"</p>
                <div className={`flex gap-4`}>
                  <div>
                    <p className={`text-md font-valueBold`}>
                      {testimony.author}
                    </p>
                    <p className={`text-xxs font-euclidItalic md:text-xs`}>
                      {testimony.profession}
                    </p>
                  </div>
                </div>
                <p className={`text-xs font-euclidRegular lg:text-sm`}>
                  {testimony.testimony}
                </p>
              </div>
            ))}
          </section>
        </article>
      </section>
    </>
  );
};

export default TestimoniesSection;
