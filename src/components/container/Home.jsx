import Accordion from "./Accordion";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";
import { logos } from "../../Data";
import { accordions } from "../../Data";
import { courses } from "../../Data";
import Course from "./Course/Course";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Features from "./Features";

import "swiper/css";
import "swiper/css/bundle";

const Home = () => {
    return (
        <div className="section ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="md:w-[40%]">
                    <div className="font-bold text-base text-BerkeleyBlue mb-4">India Space Week e-learning program</div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">Revolutionary Space Science Courses</div>
                    <p className="text-sm leading-7 text-gray max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi in, vitae facere et praesentium culpa!
                    </p>
                    <div className="mt-6 flex flex-col xs:flex-row gap-4 items-start justify-start">
                        <button className=" xs:w-1/3 w-1/2 px-6 py-3 font-bold text-white bg-BerkeleyBlue hover:bg-HoverBlue duration-200  rounded-lg mr-4 text-sm">
                            Learn More
                        </button>
                        <button className="xs:w-1/3 w-1/2 px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm hover:bg-HoverBlue hover:text-white hover:border-HoverBlue duration-200">
                            Discover
                        </button>
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <img src={hero} alt="" />
                </div>
            </div>
            {/* logos */}
            <div className="mt-10">
                <p className="text-center text-xl">In collaboration with</p>
                <div className="flex items-center justify-center sm:flex-wrap gap-4 sm:gap-8 ">
                    {logos.map((logo, i) => {
                        return (
                            <div key={i} className="w-[150px] sm:w-[140px]">
                                <img className="w-full object-cover " src={logo} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* popular courses */}
            <div className="text-2xl font-bold mt-20 mb-6">Popular Courses</div>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    480: {
                        // width: 576,
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1060: {
                        // width: 768,
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {courses.map((course) => {
                    return (
                        <SwiperSlide key={course.id}>
                            <Link to="/CourseDetails">
                                <Course {...course}></Course>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Features */}
            <Features></Features>
            {/* FAQ Accordion */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} className="mt-10">
                <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
                    Frequently <span className="text-Teal"> Asked Questions</span>
                </div>
                <div className="mt-12 max-w-[700px] mx-auto">
                    {accordions.map((acc) => {
                        return <Accordion key={acc.id} {...acc}></Accordion>;
                    })}
                </div>
            </motion.div>
            {/* newsletter */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center max-w-[600px] mx-auto mt-10"
            >
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Subscribe <span className="text-Teal"> Newsletter</span>
                </div>
                <p className="text-sm leading-7 text-gray">Subscribe to the newsletter to stay up to date with the latest space science news</p>
                <form action="" className="mt-5">
                    <input className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60" type="text" placeholder="Enter ypur email address" />
                    <button className="hover:bg-HoverBlue duration-200 text-smm text-white bg-BerkeleyBlue sm:p-3 p-2 shadow-md font-bold rounded-lg">
                        Subscribe
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Home;
