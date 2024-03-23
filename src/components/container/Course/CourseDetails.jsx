import Course1 from "../../../assets/courses1.webp";

const CourseDetails = () => {
    // Placeholder data
    const course = {
        image: Course1,
        title: "Web Development Bootcamp",
        description: "A comprehensive course on web development.",
        instructor: "John Doe",
        duration: "12 weeks",
        startDate: "January 1, 2024",
        eligibility: "Basic understanding of HTML, CSS, and JavaScript.",
        thingsToLearn: [
            "Building responsive websites with HTML and CSS",
            "Programming dynamic web applications with JavaScript",
            "Using popular web development frameworks and libraries",
        ],
    };

    return (
        <div className="section">
            <div>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-col sm:flex-row items-start justify-center gap-10">
                    <div className="w-full sm:w-1/2">
                        <img className="" src={course.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="  mb-4 ">
                            <h2 className="text-xl font-bold mb-2">Course Information</h2>
                            <ul>
                                <li>
                                    <strong>Instructor:</strong> {course.instructor}
                                </li>
                                <li>
                                    <strong>Duration:</strong> {course.duration}
                                </li>
                                <li>
                                    <strong>Start Date:</strong> {course.startDate}
                                </li>
                            </ul>
                        </div>
                        <div className="   mb-4">
                            <h2 className="text-xl font-bold mb-2">Eligibility for Enrollment</h2>
                            <p>{course.eligibility}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-2">Things You Will Learn</h2>
                            <ul>
                                {course.thingsToLearn.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className="xs:w-1/3 w-1/2 px-6 py-3 font-bold text-white bg-BerkeleyBlue rounded-lg mr-4 text-sm hover:bg-HoverBlue duration-200">
                                Enroll
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
