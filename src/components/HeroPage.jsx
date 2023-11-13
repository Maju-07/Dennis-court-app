import GooglePlay from "../assets/Playstore.png";
import AppStore from "../assets/appstore.png";
import HeroImage from "../assets/iPhone 12 Pro.png";
import "./Animation.css";

const HeroPage = () => {
  return (
    <section className="w-full ">
      <div className="w-full ">
        <div className="flex flex-col justify-center items-center overflow-hidden w-full whitespace-nowrap md:my-5">
          <h1 className="font-Poppins font-extrabold text-6xl md:text-8xl xl:text-9xl uppercase scroll md:my-10 my-6">
            Move your club to online
          </h1>
          <h1 className="font-Poppins font-extrabold text-6xl md:text-8xl xl:text-9xl uppercase scroll2 md:my-10">
            Move your club to online
          </h1>
        </div>
        <div className="md:absolute md:top-[15%] md:bottom-0 xl:left-[35%] md:left-[10%]">
          <img
            className="h-full max-sm:h-[600px] object-cover max-sm:object-left w-full"
            src={HeroImage}
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute max-w-[150px] max-sm:w-[40%] bottom-[5%] xl:bottom-[9%]  max-sm:bottom-[5%] left-[10%] max-sm:left-[5%]"
            src={GooglePlay}
            alt=""
          />
          <img
            className="absolute max-w-[150px] max-sm:w-[40%] bottom-[5%] xl:bottom-[9%] max-sm:bottom-[5%] right-[10%] max-sm:right-[5%]"
            src={AppStore}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
