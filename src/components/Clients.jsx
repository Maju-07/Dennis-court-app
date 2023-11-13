import { motion } from "framer-motion";
import logo1 from "../assets/logo (2).png";
import logo2 from "../assets/logo (3).png";
import logo3 from "../assets/logo (4).png";
import logo4 from "../assets/logo (5).png";
import logo5 from "../assets/logo (6).png";
import logo6 from "../assets/logo (7).png";
import { fadeIn } from "../variants";

export default function Clients() {
  return (
    <section className="items-center flex flex-col  px-5 w-full bg-green-100">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-stone-950 text-center text-3xl font-semibold leading-9 self-center w-[560px] max-w-full mt-16"
      >
        Clients Section
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="justify-between items-start self-center flex  w-full max-w-[1004px] gap-5 mt-8 mb-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center"
      >
        <img
          loading="lazy"
          src={logo1}
          className="aspect-[6.42] object-cover object-center max-w-[154px] max-sm:w-[100px] justify-center items-center overflow-hidden self-center shrink-0 my-auto"
        />
        <img
          loading="lazy"
          src={logo2}
          className="aspect-[4.71] object-cover object-center max-w-[113px] max-sm:w-[100px] justify-center items-center overflow-hidden self-center shrink-0 my-auto"
        />
        <img
          loading="lazy"
          src={logo3}
          className="aspect-[4.59] object-cover object-center max-w-[101px] max-sm:w-[100px] justify-center items-center overflow-hidden self-center shrink-0 my-auto"
        />
        <img
          loading="lazy"
          src={logo4}
          className="aspect-[2.97] object-cover object-center max-w-[107px] max-sm:w-[100px] justify-center items-center overflow-hidden shrink-0"
        />
        <img
          loading="lazy"
          src={logo5}
          className="aspect-[4.43] object-cover object-center max-w-[124px] max-sm:w-[100px] justify-center items-center overflow-hidden self-center shrink-0 my-auto"
        />
        <img
          loading="lazy"
          src={logo6}
          className="aspect-[7.5] object-cover object-center max-w-[165px] max-sm:w-[100px] justify-center items-center overflow-hidden self-center shrink-0 my-auto"
        />
      </motion.div>
    </section>
  );
}
