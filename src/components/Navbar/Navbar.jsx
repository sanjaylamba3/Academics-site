import { useState, useEffect } from "react";
import { navLinks, logo } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);
    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);
    return (
        <div className={`${active ? "shadow-lg bg-MintCream duration-300" : "duration-300 "}  fixed w-full top-0 left-0  z-20`}>
            <div>
                <div className={`${active ? "py-2 duration-300" : "duration-300 py-4"}  md:px-10 px-5    mx-auto flex items-center justify-between`}>
                    <div className="flex items-center gap-4">
                        <HiMenuAlt1 onClick={() => setToggle(!toggle)} className="text-3xl sm:hidden cursor-pointer"></HiMenuAlt1>
                        <Link to="/">
                            <div className="text-sm md:text-2xl uppercase tracking-wide font-bold flex items-center justify-center whitespace-nowrap">
                                <img src={logo} alt="" className="w-10 xs:w-14" /> India Space Week
                            </div>
                        </Link>
                    </div>
                    <div className="sm:flex items-center hidden">
                        {navLinks.map((navLink) => (
                            <NavLink key={navLink.id} {...navLink}></NavLink>
                        ))}
                    </div>
                    <div className="hidden sm:flex gap-4">
                        <Link
                            to="/signup"
                            className="py-3 px-2 md:px-4 font-bold text-xs md:text-sm border-2 border-solid rounded-lg border-gray hover:bg-HoverBlue duration-200 hover:text-white hover:border-HoverBlue whitespace-nowrap"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/signin"
                            className="py-3 px-2 md:px-4 font-bold text-xs md:text-sm border-2 border-solid rounded-lg border-gray hover:bg-HoverBlue duration-200 hover:text-white hover:border-HoverBlue whitespace-nowrap"
                        >
                            Sign In
                        </Link>
                    </div>
                    {toggle && (
                        <div className="duration-300 fixed h-full w-2/3 top-0 left-0 z-20 bg-BerkeleyBlue text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8">
                            <div className="flex justify-center items-center gap-4">
                                <Link
                                    onClick={(prev) => setToggle(!prev)}
                                    to="/signup"
                                    className="py-3 px-4 font-bold text-sm border-2 border-solid rounded-lg border-gray bg-PowderBlue"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    onClick={(prev) => setToggle(!prev)}
                                    to="/signin"
                                    className="py-3 px-4 font-bold text-sm border-2 border-solid rounded-lg border-gray bg-PowderBlue"
                                >
                                    Sign In
                                </Link>
                            </div>
                            {navLinks.map((navLink) => {
                                return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle}></MobileNavLinks>;
                            })}
                            <HiX onClick={() => setToggle(!toggle)} className="absolute left-6 top-6 text-xl cursor-pointer"></HiX>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
