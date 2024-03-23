import React from "react";

const locations = [
    {
        title: "INDIA SPACE WEEK (Head Office)",
        timings: "Mon-Sat 9am to 5pm.",
        address: "BA/14B, Janakpuri, New Delhi-110058",
        email: "Email: contact@indiaspaceweek.org",
        mobile: "Mobile no: 7290071471",
    },
    {
        title: `INDIA SPACE WEEK "Regional Office" (Central Eastern Zone) States covered - Uttar Pradesh, Madhya Pradesh, Uttarakhand, 
                Bihar, Jharkhand, Chattisgarh, West Bengal`,
        timings: "Mon-Sat 9am to 5pm.",
        address: "Sector F Near Uttar Pradesh Rajarshi Tandon Open University ",
        email: "Email: up@indiaspaceweek.org",
        mobile: "Mobile no: 9454394963",
    },
];

export function Contact() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="section ">
            <div className="mx-auto w-full ">
                <div className="mx-auto max-w-7xl ">
                    <div className="grid items-center justify-items-center gap-x-4 gap-y-10 md:grid-cols-2">
                        {/* contact from */}
                        <div className="flex items-center justify-center">
                            <div className="px-2 md:px-12">
                                <p className="text-2xl font-bold text-gray-900 md:text-3xl text-BerkeleyBlue">Get in touch</p>
                                <p className="mt-4 text-lg text-gray-600">Our friendly team would love to hear from you.</p>
                                <form action="" className="mt-8 space-y-8">
                                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                        <div className="relative ">
                                            <input
                                                type="text"
                                                className="peer placeholder-transparent outline-none h-10 w-full bg-transparent border-b-2 border-BerkeleyBlue"
                                                id="name"
                                                placeholder="Name"
                                            />
                                            <label
                                                htmlFor="name"
                                                className="cursor-text absolute left-0 -top-3.5 text-gray text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm transition-all duration-300"
                                            >
                                                Name
                                            </label>
                                        </div>
                                    </div>
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
                                            type="text"
                                            className="peer placeholder-transparent outline-none h-10 w-full bg-transparent border-b-2 border-b-BerkeleyBlue"
                                            id="phone"
                                            placeholder="Phone Number"
                                        />
                                        <label
                                            htmlFor="phone"
                                            className="cursor-text absolute left-0 -top-3.5 text-gray text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm transition-all duration-300"
                                        >
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className="relative ">
                                        <textarea
                                            className="peer placeholder-transparent outline-none h-10 w-full bg-transparent border-b-2 border-b-BerkeleyBlue"
                                            id="message"
                                            placeholder="Phone Number"
                                        />
                                        <label
                                            htmlFor="message"
                                            className="cursor-text absolute left-0 -top-3.5 text-gray text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm transition-all duration-300"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="hover:bg-HoverBlue duration-200 inline-flex w-full items-center justify-center rounded-md bg-BerkeleyBlue px-3.5 py-2.5 font-semibold leading-7 text-white "
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <img
                            alt="Contact us"
                            className="hidden max-h-full w-full rounded-lg object-cover md:block"
                            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                    </div>
                </div>
            </div>
            {/* Address */}
            <div className="rounded-lg ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-24">
                    <div className="py-20">
                        <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                            <div className="space-y-4">
                                <p className="w-full text-4xl font-bold text-gray-900">Our Offices</p>
                                <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
                            </div>
                            <div className="space-y-4 divide-y-2 ">
                                {locations.map((location) => (
                                    <div key={location.title} className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                                        <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                                        <p className="w-full text-base  text-gray-600">{location.timings}</p>
                                        <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                                        <p className="text-sm font-semibold text-gray-600">{location.email}</p>
                                        <p className="text-sm font-semibold text-gray-600">{location.mobile}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
