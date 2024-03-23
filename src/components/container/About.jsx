import about from "../../assets//About.jpg";

const About = () => {
    return (
        <div className="section ">
            <div className="grid md:grid-cols-2 gap-8 place-items-start">
                <div className="border-[3px] border-BerkeleyBlue rounded-lg h-full">
                    <img className="p-4 h-full" src={about} alt="" />
                </div>
                <div>
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        We provide the <br /> best <span className="text-BerkeleyBlue">space science courses </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray leading-5 mb-3 text-justify">
                            Providing high-quality space education is our goal at India Space Week (ISW). We act as an opportunity platform to space
                            enthusiasts to promote collaborate, exchange ideas, encourage the future generation to work in space exploration and
                            innovation, and raise awareness among young people and students to ignite their interest in this area. In order to close
                            the skills gap in the space industry, our courses provide a wide range of space technology-oriented abilities. Courses
                            like remote sensing, astronomy, GIS, and Python provide students with practical skills that enable them to realize their
                            full potential. We&apos;re the only space education organization involved in the inclusion of space science in the
                            academic curriculum in the education sector of India. Also, we&apos;re on our way to include space science education in
                            diploma and degree programmes of the Indian education curriculum system, such as the Diploma in Space Education in DIET
                            colleges.
                        </p>
                        <button className="hover:bg-HoverBlue duration-200 px-6 py-3 font-bold bg-BerkeleyBlue rounded-lg text-white">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
