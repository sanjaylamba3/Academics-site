import { Link } from "react-router-dom";

const MobileNavLinks = ({ link, path, setToggle }) => {
    return (
        <>
            <li className="list-none cursor-pointer mr-8">
                <Link to={path} className="font-bold transition-all duration-300 hover:text-yellow" onClick={(prev) => setToggle(!prev)}>
                    {link}
                </Link>
            </li>
        </>
    );
};

export default MobileNavLinks;
