import { books } from "../../Data";
import { motion } from "framer-motion";

const Books = () => {
    return (
        <div className="section ">
            <div className="text-center">
                <div className="sm:text-3xl text-2xl font-bold mb-5 text-BerkeleyBlue">Publications</div>
                <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto text-justify">
                    The future is here, and we are proud to announce that we are now publishing a range of books on space science! Our books range
                    from comprehensive academic textbooks to exciting and innovative stories about life in space. Get a detailed view of Space and
                    Space exploration in our books. We are pleased to provide these incredible publications for everyone to enjoy. The sky’s the
                    limit—explore space science with us today!
                </p>
            </div>

            <div className="text-2xl font-bold mt-12 text-center">Popular Books</div>
            <div className=" grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2   md:11/12 mx-auto gap-12">
                {books.map((book) => (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        key={book.id}
                        className=" px-4 py-8 text-center   cursor-pointer    flex items-center justify-center"
                    >
                        <div key={book.id} className="transition-all duration-200 hover:-translate-y-4">
                            <div className="h-48 w-48 mx-auto rounded ">
                                <img className="h-56 w-52" src={book.image} alt="" />
                            </div>
                            {/* <h4 className="text-2xl font-bold mb-2 px-2">{course.title}</h4>
                                <p className="text-sm">{course.description}</p> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Books;
