import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import sunitaJee from "../../assets/about/sunita-ghosh-profile.jpg"
import { blogData } from "@/lib/constant";
import Enquiry from "../marketing/Enquiry";



const Sidebar = () => {
    const [blog, setBlogs] = useState(null);
    const params = useParams();


    useEffect(() => {
        const filterBlogs = blogData?.filter((item) => item?.slug !== params?.slug);
        setBlogs(filterBlogs);
    }, [params])


    return (
        <aside className="w-full space-y-6">

            {/* Author */}
            <div className="w-full bg-white p-6 rounded-xl text-center shadow-sm transition-shadow duration-300">
                <img
                    src={sunitaJee}
                    className="mx-auto rounded-full mb-3 w-24 h-24 object-cover"
                    alt="Sunita Ghosh"
                />

                <h4 className="font-semibold text-lg">Sunita Ghosh</h4>

                <p className="text-lg text-muted-foreground mt-2">
                    Lead Makeup Artist with 10+ years of experience.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                    <Link
                        target="_blank"
                        to="https://www.facebook.com/people/Rouge-Makeovers/61566849390046/?rdid=q6MfQDowDAGyn57B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16gx6W4DwR%2F"
                        className="p-2 rounded-full bg-gray-100 text-gray-600 
                 hover:bg-primary hover:text-white 
                 transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-5 h-5" />
                    </Link>

                    <Link
                        target="_blank"
                        to="https://www.instagram.com/rouge_makeovers?igsh=Nnpybnl3NjlxM256"
                        className="p-2 rounded-full bg-gray-100 text-gray-600 
                 hover:bg-primary hover:text-white 
                 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>
            </div>


            {/* Popular */}
            <div className="w-full p-4 rounded-xl">
                <h4 className="font-semibold mb-4">Popular Posts</h4>
                {blog?.map((item, index: number) => {
                    return (
                        <Link
                            to={`/blog-details/${item?.slug}`}
                            key={index}
                            className="group flex items-center gap-3 mb-3"
                        >
                            <img
                                src={item?.image}
                                alt={item?.title}
                                className="
                    w-14 h-auto rounded-[5px]
                    transition-all duration-300 ease-in-out
                    group-hover:scale-110 group-hover:rotate-1
                "
                            />

                            <p
                                className="
                    text-sm font-medium text-muted-foreground
                    transition-colors duration-300
                    group-hover:text-primary
                "
                            >
                                {item?.title}
                            </p>
                        </Link>
                    );
                })}

            </div>

            <div className="w-full flex sm:px-4 justify-center items-center">
                <Enquiry title="Enquire Availability" />
            </div>

        </aside>
    );
};

export default Sidebar;
