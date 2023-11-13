import { motion } from "framer-motion";
import SecLogo from "../assets/player 2.png";
import { fadeIn } from "../variants";

export default function FeatureSection2() {
  return (
    <section className="w-full md:py-20 md:px-20 lg:px-30 xl:px-40">
      <div className="gap-5 lg:gap-10 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center w-[50%] max-md:w-full"
        >
          <div className="flex flex-col my-auto max-md:max-w-full max-md:px-5 max-md:mt-12">
            <div className="text-zinc-900  text-5xl font-semibold leading-[58.8px]  max-w-[515px] w-full max-md:text-4xl">
              How it works ?
            </div>
            <div className="text-gray text-lg leading-8 max-w-[510px] px-5 w-full mt-6">
              <ul className=" list-disc md:max-w-[550px] ">
                <li className="max-md:py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </li>
                <li className="max-md:py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </li>
                <li className="max-md:py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </li>
                <li className="max-md:py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
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
            className="p-5 max-w-[480px] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
