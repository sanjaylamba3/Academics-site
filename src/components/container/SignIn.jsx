import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <>
            <div className="section ">
                <div className="flex items-center justify-center ">
                    <div className="xl:mx-auto md:w-1/2 xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-BerkeleyBlue">Sign in to your account</h2>
                        <p className="mt-2 text-base text-gray-600">
                            Don&apos;t have an account?{" "}
                            <Link to="/signup" className="font-bold text-yellow transition-all duration-200 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-10">
                                <div className="relative ">
                                    <input
                                        type="email"
                                        className="peer placeholder-transparent outline-none h-10 w-full bg-transparent border-b-2 border-b-BerkeleyBlue"
                                        id="email"
                                        placeholder="Email"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="cursor-text absolute left-0 -top-3.5 text-gray text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm transition-all duration-300"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="relative ">
                                    <input
                                        type="password"
                                        className="peer placeholder-transparent outline-none h-10 w-full bg-transparent border-b-2 border-BerkeleyBlue"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="cursor-text absolute left-0 -top-3.5 text-gray text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm transition-all duration-300"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-BerkeleyBlue px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-HoverBlue duration-200"
                                    >
                                        Login <FaArrowRight className="ml-2" size={16} />
                                    </button>
                                    <Link className="hover:underline">Forgot Password?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
