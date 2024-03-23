import { Link } from "react-router-dom";

const NavLink = ({ link, path }) => {
    return (
        <>
            <li className="list-none cursor-pointer sm:text-sm md:text-base sm:mr-4 md:mr-8">
                <Link to={path} className="font-bold  transition-all duration-150 hover:text-yellow">
                    {link}
                </Link>
            </li>
        </>
    );
};

export default NavLink;
