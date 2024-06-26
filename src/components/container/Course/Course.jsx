import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating }) => {
    return (
        <div className=" shadow-lg  bg-white rounded-md">
            <img src={image} alt="" />
            <div className="p-2">
                <div className="mt-2 text-sm text-Teal">{category}</div>
                <div className="text-sm mt-2 font-bold">{title}</div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-Solitude p-1 rounded-full">
                            <AiOutlineUser className="text-Teal"></AiOutlineUser>
                        </div>
                        <div className="text-sm font-bold">{participants}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-Solitude p-1 rounded-full">
                            <AiOutlineStar className="text-yellow"></AiOutlineStar>
                        </div>
                        <div className="text-sm font-bold">{rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
