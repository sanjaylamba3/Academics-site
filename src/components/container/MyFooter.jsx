import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../../Data";

const MyFooter = () => {
    return (
        <motion.div className="w-full  bg-BerkeleyBlue p-6" initial={{ height: 0 }} whileInView={{ height: "auto" }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between text-white">
                <div className="w-1/3">
                    <div className="font-bold mb-6 flex items-center justify-start gap-4 whitespace-nowrap">
                        <img className="w-10 xs:w-14" src={logo} alt="" />
                        India Space Week
                    </div>
                </div>
                <div className="flex items-start justify-between gap-20">
                    <div>
                        <div className="font-bold mb-6">About</div>
                        <div className="flex flex-col gap-4">
                            <Link to={"/contact"} className="text-sm hover:underline">
                                Contact Us
                            </Link>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className="font-bold mb-6">Legal</div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-sm hover:underline">Privacy Policy</Link>
                            <Link className="text-sm hover:underline">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-white my-8" />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Link to="/">
                    <p className="text-white"> &#169; India Space Week</p>
                </Link>
            </div>
        </motion.div>
    );
};

export default MyFooter;
