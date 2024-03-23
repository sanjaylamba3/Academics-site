import workshop from "../../assets/workshop.webp";
import activity from "../../assets/activity.webp";

const Features = () => {
    return (
        <>
            <div className="my-20 ">
                <div className="flex flex-col gap-20 justify-center items-center">
                    {/* activity */}
                    <div className="flex flex-col-reverse sm:flex-row gap-10 justify-center items-start">
                        <div className="w-full sm:w-1/3">
                            <img src={activity} alt="" />
                        </div>
                        <div className="w-full sm:w-2/3">
                            <h3 className="text-2xl font-semibold text-black">Activities</h3>
                            <p className="mt-4 text-sm text-gray-600 text-justify">
                                India Space Week offers activities provides space science skills, networking opportunities, and future opportunities
                                for interested students. Our Space Science experiments align with a structured syllabus mapping with existing
                                curriculum. Our space experts will assess students through a series of do-at-home space science activities, fun
                                worksheets, software and apps, quizzes, etc. With the use of hands-on, experiential approach in sessions learners will
                                improve their higher order thinking skills such as problem-solving, and critical thinking. Our interesting
                                activity-based exercises allow students to participate and learn more about the activity.
                            </p>
                        </div>
                    </div>
                    {/* workshop */}
                    <div className="flex flex-col-reverse sm:flex-row-reverse gap-10 justify-center items-start">
                        <div className="w-full sm:w-1/3">
                            <img src={workshop} alt="" />
                        </div>
                        <div className="w-full sm:w-2/3">
                            <h3 className="text-2xl font-semibold text-black">Workshop</h3>
                            <p className="mt-4 text-sm text-gray-600 text-justify">
                                India Space Week Workshops are space science theme-based workshops that are age-group-specific and can be conducted at
                                educational institutions. They are designed in a way to make students understand concepts in books and apply them to
                                derive numbers out of nature and understand the workings of the universe. The workshops are based on the different
                                categories such as observational activities (Earth, and Eclipses such as Solar, and lunar), model making, interaction
                                based, multimedia based, and learn through play based. Also features a wide variety of sessions, presentations, and
                                hands-on activities, providing participants with a comprehensive understanding of various aspects of space science. It
                                brings together experts and professionals from various fields of space science, providing an excellent platform for
                                networking and knowledge sharing. Participants have the opportunity to interact with renowned scientists and
                                researchers, exchange ideas, and learn from their experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
