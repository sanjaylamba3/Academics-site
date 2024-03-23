import { Link } from "react-router-dom";

const Categories = ({ image, category, title }) => {
    return (
        <Link to="/CourseDetails">
            <div className="flex items-center flex-col gap-4 bg-white  rounded-lg flex-wrap">
                <div className="">
                    <img className="" src={image} alt="" />
                </div>
                <div className="p-2">
                    <div className="font-bold">{category}</div>
                    <div>{title}</div>
                    {/* <a href="" className="text-sm text-gray">
                        View More
                    </a> */}
                </div>
            </div>
        </Link>
    );
};

export default Categories;
