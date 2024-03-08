import ImageOne from "../images/cute-kid-glasses-studio 1.png";
import ImageTwo from "../images/medium-shot-kid-doing-homework.png";
import ImageThree from "../images/young-african.png";
import ImageFour from "../images/young.png";
import Button from "../../../components/ui/Button";
// import StarPepicom from "../../assets/images/pepicons-print_stars.png";
// import ArrowSpiral from "../../assets/images/arrow-spiral-up.png";
// import ArrowWiggle from "../../assets/images/arrow-wiggle-up-1.png";
// import StarMdi from "../../assets/images/mdi_stars.png";
// import StarWi from "../../assets/images/wi_stars.png"

// interface Props = {}

const HeroSection = () => {
  return (
    <>
      <main>
        <div
          className={`bg-brandWhite1x grid grid-rows-12 gap-6  py-8 px-5  md:grid-cols-12 md:gap-5 md:px-10 md:py-14 lg:px-20 lg:gap-24`}
        >
          <div
            className={`relative col-span-8 md:col-span-7 flex flex-col gap-4 justify-center`}
          >
            <h1
              className={`flex flex-col text-5xl font-DegularDiplayBlack md:text-5xl lg:text-7xl`}
            >
              Empowering Tomorrow's Innovators
            </h1>
            <div className={`flex gap-4`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 2C21.2145 1.99966 21.4234 2.0683 21.5959 2.19579C21.7684 2.32328 21.8954 2.50285 21.958 2.708L25.814 15.374L37.344 19.588C37.5341 19.6577 37.6986 19.7834 37.8158 19.9486C37.9329 20.1137 37.9971 20.3106 37.9999 20.5131C38.0027 20.7155 37.944 20.9141 37.8315 21.0824C37.7191 21.2508 37.5581 21.3811 37.37 21.456L25.916 26.006L21.958 39.286C21.8963 39.4921 21.7698 39.6729 21.5972 39.8013C21.4246 39.9298 21.2152 39.9992 21 39.9992C20.7848 39.9992 20.5754 39.9298 20.4028 39.8013C20.2302 39.6729 20.1037 39.4921 20.042 39.286L16.084 26.006L4.63 21.456C4.44188 21.3811 4.28094 21.2508 4.16847 21.0824C4.05599 20.9141 3.99728 20.7155 4.0001 20.5131C4.00291 20.3106 4.06713 20.1137 4.18425 19.9486C4.30137 19.7834 4.46587 19.6577 4.656 19.588L16.186 15.374L20.044 2.708C20.1065 2.50318 20.2332 2.32384 20.4053 2.19638C20.5774 2.06893 20.7858 2.00009 21 2Z"
                    fill="#010101"
                  />
                  <path
                    d="M34.6604 39.8999C34.4404 39.8999 34.2604 39.7399 34.2404 39.5399C33.8404 35.5399 33.5404 34.2599 29.7804 33.9199C29.6758 33.9108 29.5784 33.8625 29.5079 33.7846C29.4374 33.7067 29.399 33.605 29.4004 33.4999C29.4004 33.2799 29.5604 33.0999 29.7804 33.0799C33.5804 32.7199 33.8404 31.6799 34.2404 27.7799C34.2604 27.5599 34.4404 27.3999 34.6604 27.3999C34.8804 27.3999 35.0604 27.5599 35.0804 27.7599C35.4804 31.6799 35.7404 32.7199 39.5404 33.0599C39.7604 33.0799 39.9204 33.2599 39.9204 33.4799C39.9204 33.6999 39.7604 33.8799 39.5404 33.8999C35.8004 34.2599 35.4804 35.5399 35.1004 39.5199C35.0804 39.7399 34.9004 39.8999 34.6804 39.8999H34.6604Z"
                    fill="#010101"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 1C18.2145 0.999662 18.4234 1.0683 18.5959 1.19579C18.7684 1.32328 18.8954 1.50285 18.958 1.708L22.814 14.374L34.344 18.588C34.5341 18.6577 34.6986 18.7834 34.8158 18.9486C34.9329 19.1137 34.9971 19.3106 34.9999 19.5131C35.0027 19.7155 34.944 19.9141 34.8315 20.0824C34.7191 20.2508 34.5581 20.3811 34.37 20.456L22.916 25.006L18.958 38.286C18.8963 38.4921 18.7698 38.6729 18.5972 38.8013C18.4246 38.9298 18.2152 38.9992 18 38.9992C17.7848 38.9992 17.5754 38.9298 17.4028 38.8013C17.2302 38.6729 17.1037 38.4921 17.042 38.286L13.084 25.006L1.63 20.456C1.44188 20.3811 1.28094 20.2508 1.16847 20.0824C1.05599 19.9141 0.997279 19.7155 1.0001 19.5131C1.00291 19.3106 1.06713 19.1137 1.18425 18.9486C1.30137 18.7834 1.46587 18.6577 1.656 18.588L13.186 14.374L17.044 1.708C17.1065 1.50318 17.2332 1.32384 17.4053 1.19638C17.5774 1.06893 17.7858 1.00009 18 1ZM18 5.432L14.954 15.432C14.9088 15.5802 14.8299 15.7159 14.7233 15.8283C14.6168 15.9408 14.4855 16.0269 14.34 16.08L4.806 19.568L14.274 23.328C14.4143 23.384 14.5401 23.471 14.6419 23.5825C14.7437 23.6941 14.819 23.8272 14.862 23.972L18.002 34.5L21.138 23.972C21.181 23.8272 21.2563 23.6941 21.3581 23.5825C21.4599 23.471 21.5857 23.384 21.726 23.328L31.194 19.568L21.66 16.084C21.5145 16.0309 21.3832 15.9448 21.2767 15.8323C21.1701 15.7199 21.0912 15.5842 21.046 15.436L18 5.432Z"
                  fill="#010101"
                />
                <path
                  d="M33.4998 38.2398C33.2998 38.2398 33.1198 38.0798 33.0998 37.8798C32.7398 34.2398 32.4598 33.0798 29.1198 32.7598C28.9198 32.7398 28.7598 32.5598 28.7598 32.3598C28.7598 32.1598 28.9198 31.9798 29.1198 31.9598C32.5398 31.6398 32.7398 30.7598 33.0998 27.1198C33.0998 26.9198 33.2998 26.7598 33.4998 26.7598C33.6998 26.7598 33.8798 26.9198 33.8998 27.1198C34.2598 30.7598 34.4798 31.6398 37.8798 31.9598C38.0798 31.9798 38.2398 32.1598 38.2398 32.3598C38.2398 32.5598 38.0798 32.7398 37.8798 32.7598C34.5198 33.0798 34.2598 34.2398 33.8998 37.8998C33.8998 38.0998 33.7198 38.2598 33.4998 38.2598V38.2398Z"
                  fill="#010101"
                />
              </svg>
              <p
                className={`text-base text-brandGray3x font-TrapMedium leading-7  md:text-lg md:leading-9 lg:leading-10 lg:pr-32 `}
              >
                Welcome to our innovative platform, where we are dedicated to empowering tomorrow's innovators through early tech education for young minds.{" "}
              </p>
            </div>
            <div
              className={`flex gap-2 md:justify-normal w-fit`}
            >
              <Button intent={"outline"}>Get your school invovled</Button>
            </div>
          </div>
          <div
            className={`col-span-8  grid grid-cols-2 gap-2 justify-center items-center md:col-span-5 lg:gap-4`}
          >
            <div
              className={`bg-brandYellow1x rounded-xl flex items-end justify-end`}
            >
              <img
                src={ImageOne}
                alt="Cascade: Image of a child on glasses"
                className={`rounded-r-xl`}
              />
            </div>
            <div
              className={`bg-brandBlue3x rounded-xl flex items-end justify-start`}
            >
              <img
                src={ImageTwo}
                alt="Cascade: Image of a young boy doing his assignment"
                className={`rounded-l-xl rounded-r-xl`}
              />
            </div>
            <div
              className={`bg-brandBlue3x rounded-xl flex items-end justify-end`}
            >
              <img
                src={ImageThree}
                alt="Cascade: Image of a young tech boy with his laptop"
              />
            </div>
            <div
              className={`bg-brandYellow1x rounded-xl flex items-end justify-star`}
            >
              <img
                src={ImageFour}
                alt="Cascade: Image of a a young tech girl with her tablet and laptop"
                className={`rounded-l-xl`}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
