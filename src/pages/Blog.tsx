import Appointment from "@/components/Appointment"
import BlogCard from "@/components/blog/BlogCard"
import BlogSidebar from "@/components/blog/BlogSidebar"
import { blogData } from "@/lib/constant"
import { ArrowRight } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Blog = () => {

    const blog = blogData[3];

    return (
        <>
            <Helmet>
                {/* Page Title */}
                <title>Bridal Makeup Blog | Expert Tips & Trends | Rouge Makeovers</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Explore expert bridal makeup tips, trends, skincare advice, and wedding beauty inspiration by Rouge Makeovers. Perfect guidance for modern brides."
                />

                {/* Keywords (Optional but fine) */}
                <meta
                    name="keywords"
                    content="bridal makeup blog, wedding makeup tips, bridal beauty tips, makeup trends, skincare for brides, Rouge Makeovers blog"
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                />

                {/* Open Graph (Facebook, WhatsApp, Instagram preview) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Bridal Makeup Blog | Rouge Makeovers" />
                <meta
                    property="og:description"
                    content="Read expert bridal makeup tips, wedding beauty trends, and skincare advice curated by Rouge Makeovers."
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                />
                <meta
                    property="og:url"
                    content="https://rougemakeovers.com/blog"
                />
                <meta property="og:site_name" content="Rouge Makeovers" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bridal Makeup Blog | Rouge Makeovers" />
                <meta
                    name="twitter:description"
                    content="Discover bridal makeup tips, wedding beauty trends, and expert advice from Rouge Makeovers."
                />
                <meta
                    name="twitter:image"
                    content="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                />
            </Helmet>

            <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-[1440px] px-4 lg:px-[3rem] flex flex-col justify-center items-center pt-5 md:pt-14 pb-20">
                    <section className="pt-16 pb-8 sm:pb-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 items-center">

                        {/* Image */}
                        <div
                            data-aos="fade-up"
                            className="group overflow-hidden rounded-xl"
                        >
                            <img
                                src={blog?.image}
                                alt="Bridal Makeup"
                                className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105 shadow-[0_12px_30px_rgba(0,0,0,0.12)] group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] rounded-xl"
                            />
                        </div>


                        {/* Content */}
                        <div data-aos="w-full fade-up">
                            <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4 sm:mb-5">
                                FEATURED POST
                            </span>

                            <h1
                                className="text-4xl md:text-5xl font-playfair font-bold leading-[44px] md:leading-[56px] mb-4 sm:mb-5"
                            >
                                {blog?.title}
                            </h1>

                            <p className="text-muted-foreground text-lg">
                                {blog?.description}
                            </p>

                            <Link to={`/blog-details/${blog?.slug}`} className="mt-2 flex justify-start item-start">
                                <span
                                    className="inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300 hover:gap-3"
                                >
                                    Read more
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 hover:translate-x-1"
                                    />
                                </span>
                            </Link>

                        </div>
                    </section>

                    <h2 className="w-full text-4xl text-center font-playfair text-primary font-bold">
                        Recent Articles
                    </h2>

                    <section className="w-full px-4 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        <div className="w-full blog sm:hidden">
                            <BlogSidebar />
                        </div>

                        {/* LEFT – Articles */}
                        <div className="lg:col-span-2 w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {blogData?.map((blog, index) => (
                                    <BlogCard
                                        key={index}
                                        slug={blog?.slug}
                                        category={blog?.category}
                                        title={blog?.title}
                                        description={blog?.description}
                                        image={blog?.image}
                                        date={blog?.date}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT – Sidebar */}
                        <div className="w-full hidden sm:block">
                            <BlogSidebar />
                        </div>
                    </section>

                    <section className="w-full flex justify-center items-center sm:mt-5">
                        <div className="w-full container max-w-[1110px] px-2">
                            <Appointment />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Blog