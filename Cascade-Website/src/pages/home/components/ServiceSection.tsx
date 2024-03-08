// interface Props = {}

const ServiceSection = () => {
  return (
    <>
      <section>
        <div className={`bg-brandBlue6x py-16 flex flex-col gap-10`}>
          <div
            className={`flex items-center justify-center px-5 md:px-10 lg:px-20`}
          >
            <h2
              className={`text-4xl text-center font-DegularDiplayBold md:text-5xl`}
            >
              Benefits of our Service to your Students
            </h2>
          </div>
          <div
            className={`grid grid-cols-1 gap-8 items-center justify-center px-5 md:grid-cols-3 md:px-10 lg:px-20`}
          >
            <section className={`grid grid-cols-1 gap-8 `}>
              <div
                className={`flex flex-col gap-2 bg-brandBlue4x p-5 rounded-xl shadow-2xl`}
              >
                <h3 className={`font-euclidBold  text-xl`}>DIGITAL LITERACY</h3>
                <p className={`font-euclidMedium text-sm leading-7`}>
                  In a world run by technology, the ability to use technology
                  effectively is vital. Cascade creates an environment for kids
                  to know how to use various digital tools and applications.
                </p>
              </div>
              <div
                className={`flex flex-col gap-2 bg-brandBlue4x p-5 rounded-xl shadow-2xl`}
              >
                <h3 className={`font-euclidBold  text-xl`}>CREATIVITY</h3>
                <p className={`font-euclidMedium text-sm leading-7`}>
                  With Cascade, digital tools to express yourself and create
                  something new are available for kids to explore. This could be
                  anything from creating digital art to developing a video game.
                </p>
              </div>
            </section>
            <section>
              <div
                className={`flex flex-col gap-2 bg-brandBlue4x p-5 rounded-xl shadow-2xl`}
              >
                <h3 className={`font-euclidBold  text-xl`}>LOGICAL THINKING</h3>
                <p className={`font-euclidMedium text-sm leading-7`}>
                  Many of the activities require students to break down a
                  problem into smaller parts and then make logical connections
                  between those parts. This helps them to develop critical
                  thinking and problem-solving skills that can be applied in any
                  situation.
                </p>
              </div>
            </section>
            <section className={`grid grid-cols-1 gap-8`}>
              <div
                className={`flex flex-col gap-2 bg-brandBlue4x p-5 rounded-xl shadow-2xl`}
              >
                <h3 className={`font-euclidBold  text-xl`}>
                  PROBLEM SOLVING SKILLS
                </h3>
                <p className={`font-euclidMedium text-sm leading-7`}>
                  Cascade provides a variety of activities that allow students
                  to apply what they've learned and practice their
                  problemsolving skill. We have a variety of project the will help improve stdents.
                </p>
              </div>
              <div
                className={`flex flex-col gap-2 bg-brandBlue4x p-5 rounded-xl shadow-2xl`}
              >
                <h3 className={`font-euclidBold  text-xl`}>
                  FUTURE CAREER OPPORTUNITIES
                </h3>
                <p className={`font-euclidMedium text-sm leading-7`}>
                  The skills that students develop on Cascade can open up a wide
                  range of future career opportunities. Coding and engineering
                  are in high demand in today's job market. 
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
