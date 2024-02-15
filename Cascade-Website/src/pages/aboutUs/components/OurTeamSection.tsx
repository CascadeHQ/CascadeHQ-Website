// images
import TeamMember1 from "../images/team-member.jpg";

const OurTeamSection = () => {
  const teamMembers = [
    {
      name: "Team Member1",
      information:
        "Brief History explanation, ok. some brief explanation, ok.some brief explanation, ok. some brief explanation, ok. somebrief explanation, ok. some brief explanation, ok.",
    },
    {
      name: "Team Member1",
      information:
        "Brief History explanation, ok. some brief explanation, ok.some brief explanation, ok. some brief explanation, ok. somebrief explanation, ok. some brief explanation, ok.",
    },
    {
      name: "Team Member1",
      information:
        "Brief History explanation, ok. some brief explanation, ok.some brief explanation, ok. some brief explanation, ok. somebrief explanation, ok. some brief explanation, ok.",
    },
  ];
  return (
    <>
      <main>
        <div className={`px-5 my-24 mx-auto xl:w-[80%] `}>
          <div className={`text-center mb-10`}>
            <h1
              className={`font-madeTommyExtraBold font-bold text-3xl xl:text-5xl`}
            >
              Our Team
            </h1>
          </div>
          <div
            className={`flex flex-col gap-y-12 xl:flex-row xl:gap-x-14 xl:items-center `}
          >
            {teamMembers.map((member) => (
              <div
                className={`flex flex-col justify-center items-center gap-y-5`}
              >
                <div>
                  <img src={TeamMember1} alt="image" className={`rounded-full w-[190px] h-[190px] xl:w-[290px] xl:h-[290px]`}/>
                </div>
                <div className={`text-center`}>
                  <h4 className={`font-madeTommyRegular font-bold xl:text-2xl xl:leading-7`}>{member.name}</h4>
                  <p className={`font-madeTommyThin font-normal mx-auto my-0 w-2/4 xl:w-full mt-3 xl:mt-5 xl:text-base xl:leading-5`}>
                    {member.information}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default OurTeamSection;
