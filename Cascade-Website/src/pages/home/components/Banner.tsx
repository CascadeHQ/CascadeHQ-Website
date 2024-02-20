import Button from "../../../components/ui/Button";

const Banner = () => {
  return (
    <>
      <section>
        <aside
          className={`flex flex-col justify-center items-center gap-4 bg-brandBlue3x py-12 px-5 md:px-10 lg:px-20`}
        >
          <h1
            className={`font-valueBold text-brandWhite1x text-center  text-4xl`}
          >
            Get your Students registered today
          </h1>
          <p
            className={`font-euclidRegular text-sm text-center px-10 lg:px-96`}
          >
            And some set of body text to spice things up and better
            understanding. That’s all Init. And some set of body text to spice
            things up and better understanding.
          </p>
          <div className={`flex gap-4`}>
            <Button intent={"primary"}>Get your school invovled</Button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Banner;
