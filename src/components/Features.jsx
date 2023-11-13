import { motion } from "framer-motion";
import FeaturesLogo from "../assets/iPhone 13 Pro.png";
import "../components/Features.css";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <section className="w-full px-5 md:px-20 lg:px-30 xl:px-40 pt-[4em] lg:pt-[10em] mb-10">
      <div>
        <div className="my-5 md:flex md:flex-row md:justify-center md:items-center">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="font-Poppins font-extrabold text-[32px] max-sm:max-w-[161px] leading-[38px]"
          >
            Our Key Features
          </motion.h1>
        </div>
        <div className="parent">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div1"
          >
            <h2 className=" font-Poppins text-[25px] font-semibold leading-[30px] my-5">
              Features 1
            </h2>
            <p className="md:max-w-[286px] font-Poppins text-gray text-[14px] font-normal leading-[21px]">
              Lorem ipsum dolor sit amet consectetur. Ipsum imperdiet nulla eu
              risus orci sit nunc molestie. Volutpat ut sed massa netus
              pharetra. Pulvinar viverra donec sit augue in tellus. Nisl arcu eu
              nisi eget mauris nisi facilisi elit mauris egestas viverra turpis
              tempor.
            </p>
          </motion.div>
          {/* first */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div2 md:grid md:place-items-end"
          >
            <h2 className=" font-Poppins text-[25px] font-semibold leading-[30px] my-5">
              Features 2
            </h2>
            <p className="md:max-w-[286px] font-Poppins md:text-end text-gray text-[14px] font-normal leading-[21px]">
              Lorem ipsum dolor sit amet consectetur. Ipsum imperdiet nulla eu
              risus orci sit nunc molestie. Volutpat ut sed massa netus
              pharetra. Pulvinar viverra donec sit augue in tellus. Nisl arcu eu
              nisi eget mauris nisi facilisi elit mauris egestas viverra turpis
              tempor.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div3 max-md:hidden relative"
          >
            <div className=" absolute right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="89"
                viewBox="0 0 106 89"
                fill="none"
              >
                <path
                  d="M103.919 86.8513C72.0979 85.5785 44.3005 38.5854 76.5327 17.6345C87.5424 10.4782 100.687 24.7346 99.2968 35.5454C95.8549 62.3153 62.3006 64.0945 43.1376 54.6118C21.3746 43.8424 11.3438 22.5952 2.00037 1.57251"
                  stroke="#4ECB71"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
            <div className=" absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="89"
                viewBox="0 0 106 89"
                fill="none"
              >
                <path
                  d="M103.919 2C72.0979 3.27284 44.3005 50.2659 76.5327 71.2168C87.5424 78.3731 100.687 64.1167 99.2968 53.306C95.8549 26.536 62.3006 24.7568 43.1376 34.2396C21.3746 45.0089 11.3438 66.2561 2.00037 87.2788"
                  stroke="#4ECB71"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div4 max-md:hidden relative"
          >
            <div className=" absolute top-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="89"
                viewBox="0 0 106 89"
                fill="none"
              >
                <path
                  d="M1.80859 86.8513C33.6296 85.5785 61.4271 38.5854 29.1949 17.6345C18.1851 10.4782 5.0408 24.7346 6.43075 35.5454C9.8726 62.3153 43.4269 64.0945 62.59 54.6118C84.353 43.8424 94.3837 22.5952 103.727 1.57251"
                  stroke="#4ECB71"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
            <div className=" absolute bottom-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="89"
                viewBox="0 0 106 89"
                fill="none"
              >
                <path
                  d="M1.80859 2C33.6296 3.27284 61.4271 50.2659 29.1949 71.2168C18.1851 78.3731 5.0408 64.1167 6.43075 53.306C9.8726 26.536 43.4269 24.7568 62.59 34.2396C84.353 45.0089 94.3837 66.2561 103.727 87.2788"
                  stroke="#4ECB71"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div5"
          >
            <h2 className=" font-Poppins text-[25px] font-semibold leading-[30px] my-5">
              Features 3
            </h2>
            <p className="md:max-w-[286px] font-Poppins text-gray text-[14px] font-normal leading-[21px]">
              Lorem ipsum dolor sit amet consectetur. Ipsum imperdiet nulla eu
              risus orci sit nunc molestie. Volutpat ut sed massa netus
              pharetra. Pulvinar viverra donec sit augue in tellus. Nisl arcu eu
              nisi eget mauris nisi facilisi elit mauris egestas viverra turpis
              tempor.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div6 md:grid md:place-items-end"
          >
            <h2 className=" font-Poppins text-[25px] font-semibold leading-[30px] my-5">
              Features 4
            </h2>
            <p className="md:max-w-[286px] font-Poppins md:text-end text-gray text-[14px] font-normal leading-[21px]">
              Lorem ipsum dolor sit amet consectetur. Ipsum imperdiet nulla eu
              risus orci sit nunc molestie. Volutpat ut sed massa netus
              pharetra. Pulvinar viverra donec sit augue in tellus. Nisl arcu eu
              nisi eget mauris nisi facilisi elit mauris egestas viverra turpis
              tempor.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="div7 md:grid md:place-content-center"
          >
            <img className="" src={FeaturesLogo} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
