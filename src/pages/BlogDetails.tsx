import { useEffect, useState } from "react";
import { Share2, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Sidebar from "@/components/blogDetails/Sidebar";
import BlogCard from "@/components/blog/BlogCard";

import sunitaJee from "../assets/about/sunita-ghosh-profile.jpg";
import { blogData, popularTags } from "@/lib/constant";
import Appointment from "@/components/Appointment";

const BlogDetails = () => {
    const { slug } = useParams();

    const [activeBlog, setActiveBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    /* ------------------ LOAD BLOG ------------------ */
    useEffect(() => {
        if (!slug) return;

        const index = blogData.findIndex((item) => item.slug === slug);
        if (index === -1) return;

        setActiveBlog(blogData[index]);

        const nextBlogs = [];
        let i = 1;

        while (nextBlogs.length < 3 && blogData.length > 1) {
            nextBlogs.push(blogData[(index + i) % blogData.length]);
            i++;
        }

        setRelatedBlogs(nextBlogs);
    }, [slug]);

    /* ------------------ SHARE ------------------ */
    const handleShare = async () => {
        if (!activeBlog) return;

        const shareData = {
            title: activeBlog.title,
            text: activeBlog.seoDescription,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Share cancelled");
            }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    if (!activeBlog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-lg">
                Blog not found
            </div>
        );
    }


    return (
        <>
            {/* ------------------ SEO ------------------ */}
            {activeBlog && (
                <Helmet>
                    {/* ================== BASIC SEO ================== */}
                    <title>{activeBlog.title} | Rouge Makeovers</title>

                    <meta
                        name="description"
                        content={activeBlog.description[0]}
                    />

                    <meta
                        name="keywords"
                        content={`${activeBlog.category}, bridal makeup, wedding makeup tips, Rouge Makeovers, luxury bridal makeup`}
                    />

                    <link
                        rel="canonical"
                        href={`https://rougemakeovers.com/blog/${activeBlog.slug}`}
                    />

                    {/* ================== OPEN GRAPH (Facebook, WhatsApp, Instagram) ================== */}
                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="Rouge Makeovers" />

                    <meta
                        property="og:title"
                        content={activeBlog.title}
                    />

                    <meta
                        property="og:description"
                        content={activeBlog.description[0]}
                    />

                    <meta
                        property="og:image"
                        content={activeBlog.image}
                    />

                    <meta
                        property="og:image:width"
                        content="900"
                    />

                    <meta
                        property="og:image:height"
                        content="540"
                    />

                    <meta
                        property="og:url"
                        content={`https://rougemakeovers.com/blog/${activeBlog.slug}`}
                    />

                    {/* ================== TWITTER ================== */}
                    <meta name="twitter:card" content="summary_large_image" />

                    <meta
                        name="twitter:title"
                        content={activeBlog.title}
                    />

                    <meta
                        name="twitter:description"
                        content={activeBlog.description[0]}
                    />

                    <meta
                        name="twitter:image"
                        content={activeBlog.image}
                    />
                </Helmet>
            )}



            <div className="w-full pt-5 md:pt-24 pb-20 flex justify-center items-center">

                <div className="w-full max-w-[1440px] px-4 lg:px-[3rem]">

                    {/* Breadcrumb */}
                    <p className="w-full flex items-center text-base text-muted-foreground mb-6 group">
                        <Link
                            to="/blog"
                            className="transition-all duration-200 group-hover:text-primary"
                        >
                            Blog
                        </Link>
                        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        <span className="text-primary font-medium">{activeBlog?.category}</span>
                    </p>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-10">

                        {/* CONTENT */}
                        <div className="w-full lg:col-span-4">

                            <h1 className="text-3xl md:text-4xl lg:text-5xl 
               leading-snug md:leading-normal lg:leading-snug font-playfair 
               font-bold mb-3">
                                {activeBlog?.title}
                            </h1>

                            {/* Author */}
                            <div className="flex items-center justify-between my-10">
                                {/* Author Info */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={sunitaJee}
                                        className="rounded-full w-16 h-16 object-cover"
                                        alt="Sunita Ghosh"
                                    />

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium text-lg">Sunita Ghosh</p>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">
                                                Owner
                                            </span>
                                        </div>

                                        <p className="text-base text-muted-foreground">
                                            Senior Makeup Artist · {activeBlog?.date} · 5 min read
                                        </p>
                                    </div>
                                </div>

                                {/* Share Button */}
                                <button
                                    onClick={handleShare}
                                    className="
            flex items-center gap-2
            px-4 py-2 rounded-full
            border border-border
            text-sm font-medium
            transition-all duration-300
            hover:bg-primary hover:text-white
            hover:shadow-md
        "
                                >
                                    <Share2 size={18} />
                                    Share
                                </button>
                            </div>

                            {/* Hero Image */}
                            <img
                                src={activeBlog?.detailsImage}
                                className="w-full h-auto rounded-xl mb-5 object-cover"
                                alt="Bridal makeup look"
                            />

                            <div className="w-full flex flex-col justify-center items-center gap-4">
                                {activeBlog?.description?.map((dec, index: number) => {
                                    return (
                                        < p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                            {dec}
                                        </p>
                                    )
                                })}
                            </div>


                            {/* Content */}
                            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed mt-10">

                                {activeBlog?.details?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex flex-col justify-center items-start gap-4"
                                    >
                                        {/* Section Title */}
                                        <h3 className="text-xl sm:text-2xl font-semibold text-black leading-snug">
                                            <span className="text-primary font-bold mr-2">
                                                {index + 1}.
                                            </span>
                                            {item?.title}
                                        </h3>

                                        {/* Section Description */}
                                        {item?.description?.map((desc, idx) => (
                                            <p
                                                key={idx}
                                                className="lex-base sm:text-lg text-muted-foreground leading-relaxed"
                                            >
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                ))}


                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {popularTags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
      inline-flex items-center
      bg-primary/10
      text-primary
      px-4 py-1
      rounded-full
      text-sm
      font-medium
      border border-primary/20
      hover:bg-primary
      hover:text-white
      hover:border-primary
      transition-all
      duration-300
      cursor-pointer
    "
                                        >
                                            {tag}
                                        </span>
                                    ))}


                                </div>
                            </div>

                        </div>

                        {/* SIDEBAR */}
                        <div className="w-full lg:col-span-2">
                            <Sidebar />
                        </div>
                    </div>

                    {/* RELATED POSTS */}
                    <div className="w-full mt-8 sm:mt-20">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Related Blogs</h2>
                            <Link to="/blog" className="text-primary text-base font-medium">
                                View All Posts
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedBlogs?.map((blog, index) => (
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

                    {/* Appointment Form */}
                    <section className="w-full flex justify-center items-center mt-10 sm:mt-20">
                        <Appointment />
                    </section>

                </div>

            </div>
        </>
    )
}

export default BlogDetails