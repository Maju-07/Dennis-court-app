import { motion } from "framer-motion";
import GooglePlay from "../assets/Playstore.png";
import AppStore from "../assets/appstore.png";
import { fadeIn } from "../variants";
import "./Animation.css";

export default function JoinUs() {
  return (
    <div className="flex w-full flex-col mb-20 lg:my-30 xl:my-40 ">
      {/* first */}
      <div className="text-white overflow-hidden whitespace-nowrap text-6xl font-bold leading-[73.2px] uppercase  justify-center items-center bg-green-400 w-full py-2.5 max-md:max-w-full max-md:text-4xl ">
        <h1 className="scroll3">
          Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet .
        </h1>
      </div>
      {/* center  */}
      <div className=" items-center justify-center flex w-full flex-col mt-20 px-5">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" text-black text-center items-center text-8xl font-bold leading-[108px] w-full max-md:max-w-full max-md:text-4xl"
        >
          Join us Now
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" text-neutral-800 text-center  items-center justify-center text-lg leading-7 w-full max-w-[896px] mt-6 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </motion.div>
        <div className="items-start self-center flex max-w-[349px] w-full gap-3 mt-6">
          <motion.img
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            loading="lazy"
            src={GooglePlay}
            className=" object-cover object-center max-w-[160px] overflow-hidden shrink-0"
          />
          <motion.img
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            loading="lazy"
            src={AppStore}
            className=" object-cover object-center max-w-[160px] overflow-hidden shrink-0"
          />
        </div>
      </div>
      {/* second  */}
      <div className="text-white overflow-hidden whitespace-nowrap text-6xl font-bold leading-[73.2px] uppercase justify-center items-center bg-green-400 w-full mt-20  py-2.5 max-md:max-w-full max-md:text-4xl ">
        <h1 className="scroll4 ">
          Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet .
        </h1>
      </div>
    </div>
  );
}
