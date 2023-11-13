import { motion } from "framer-motion";
import SecLogo from "../assets/player 1.png";
import "../components/Features.css";
import { fadeIn } from "../variants";

export default function FeatureSection() {
  return (
    <section className="w-full md:py-20 md:px-20">
      <div className=" flex max-md:flex-col-reverse max-md:gap-0 ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center w-[52%] max-md:w-full"
        >
          <img
            loading="lazy"
            src={SecLogo}
            className="p-5 max-w-[450px] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-12"
          />
        </motion.div>
        {/* text  */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col w-[48%]  max-md:w-full"
        >
          <div className="items-start flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-12">
            <div className="text-zinc-900 text-5xl font-semibold leading-[58.8px] w-[515px] max-w-full max-md:text-4xl">
              A one stop court booking app
            </div>
            <div className="text-zinc-700 text-xl leading-8 w-[560px] max-w-full mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </div>
            <div className="justify-center items-center bg-green-400 flex w-[130px] max-w-full grow flex-col mt-5 px-5 py-3">
              <div className="text-white text-xs font-medium leading-4 self-center">
                GET STARTED
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
