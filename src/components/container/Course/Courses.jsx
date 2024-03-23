import Categories from "./Categories";
import { courses } from "../../../Data";

const Courses = () => {
    return (
        <div className="section">
            <div className="text-center">
                <div className="sm:text-3xl text-2xl font-bold mb-5 text-BerkeleyBlue">Courses</div>
                <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto text-justify">
                    A successful job in the space business requires expertise in remote sensing, astronomy, rocket technology, drones,
                    satellites,geographic information systems (GIS), and Python programming. At present, we are offering courses in Python programming
                    language, GIS, Astronomy, and remote sensing.
                </p>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
                {courses.map((course) => {
                    return <Categories key={course.id} {...course}></Categories>;
                })}
            </div>
        </div>
    );
};

export default Courses;
