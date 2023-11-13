import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import "../components/Swiper.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function TestimonialSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full  overflow-hidden">
      <div className="w-[90%] mx-auto my-20 ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="self-stretch my-10 md:my-20 text-zinc-900 text-center md:text-[39px] text-[30px] font-semibold leading-10"
        >
          Testimonial section{" "}
          <span className="md:text-[74px] font-bold">“</span>
        </motion.div>
        <Slider {...settings}>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="items-start self-stretch border bg-white flex w-[286px] flex-col px-5 border-solid border-slate-200"
          >
            <div className="items-start self-stretch flex flex-col w-full mx-1 my-6">
              <div className="self-stretch text-zinc-700 text-sm leading-5 w-full">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </div>
              <div className="items-start self-stretch bg-stone-50 flex w-full justify-between gap-2 mt-14 px-4 py-6">
                <img
                  loading="lazy"
                  src={test1}
                  className="aspect-square object-cover object-center w-[60px] justify-center items-center overflow-hidden shrink-0"
                />
                <div className="items-start self-center flex flex-col w-[138px] my-auto">
                  <div className="self-stretch text-zinc-900 text-lg font-bold leading-8">
                    Author Name
                  </div>
                  <div className="self-stretch text-zinc-700 text-sm leading-4 w-full mt-1">
                    VP of Company
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* second */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="items-start self-stretch border bg-white flex w-[286px] flex-col px-5 border-solid border-slate-200"
          >
            <div className="items-start self-stretch flex flex-col w-full mx-1 my-6">
              <div className="self-stretch text-zinc-700 text-sm leading-5 w-full">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </div>
              <div className="items-start self-stretch bg-stone-50 flex w-full justify-between gap-2 mt-14 px-4 py-6">
                <img
                  loading="lazy"
                  src={test2}
                  className="aspect-square object-cover object-center w-[60px] justify-center items-center overflow-hidden shrink-0"
                />
                <div className="items-start self-center flex flex-col w-[138px] my-auto">
                  <div className="self-stretch text-zinc-900 text-lg font-bold leading-8">
                    Author Name
                  </div>
                  <div className="self-stretch text-zinc-700 text-sm leading-4 w-full mt-1">
                    VP of Company
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* third */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="items-start self-stretch border bg-white flex w-[286px] flex-col px-5 border-solid border-slate-200"
          >
            <div className="items-start self-stretch flex flex-col w-full mx-1 my-6">
              <div className="self-stretch text-zinc-700 text-sm leading-5 w-full">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </div>
              <div className="items-start self-stretch bg-stone-50 flex w-full justify-between gap-2 mt-14 px-4 py-6">
                <img
                  loading="lazy"
                  src={test3}
                  className="aspect-square object-cover object-center w-[60px] justify-center items-center overflow-hidden shrink-0"
                />
                <div className="items-start self-center flex flex-col w-[138px] my-auto">
                  <div className="self-stretch text-zinc-900 text-lg font-bold leading-8">
                    Author Name
                  </div>
                  <div className="self-stretch text-zinc-700 text-sm leading-4 w-full mt-1">
                    VP of Company
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* fourth */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="items-start self-stretch border bg-white flex w-[286px] flex-col px-5 border-solid border-slate-200"
          >
            <div className="items-start self-stretch flex flex-col w-full mx-1 my-6">
              <div className="self-stretch text-zinc-700 text-sm leading-5 w-full">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </div>
              <div className="items-start self-stretch bg-stone-50 flex w-full justify-between gap-2 mt-14 px-4 py-6">
                <img
                  loading="lazy"
                  src={test1}
                  className="aspect-square object-cover object-center w-[60px] justify-center items-center overflow-hidden shrink-0"
                />
                <div className="items-start self-center flex flex-col w-[138px] my-auto">
                  <div className="self-stretch text-zinc-900 text-lg font-bold leading-8">
                    Author Name
                  </div>
                  <div className="self-stretch text-zinc-700 text-sm leading-4 w-full mt-1">
                    VP of Company
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Slider>
      </div>
    </section>
  );
}

const cardData = [
  {
    id: 1,
    content:
      "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”",
    img: test1,
    name: "Author name",
    company: "VP of company",
  },
  {
    id: 2,
    content:
      "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”",
    img: test1,
    name: "Author name",
    company: "VP of company",
  },
  {
    id: 3,
    content:
      "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”",
    img: test1,
    name: "Author name",
    company: "VP of company",
  },
  {
    id: 4,
    content:
      "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”",
    img: test1,
    name: "Author name",
    company: "VP of company",
  },
];
