import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogCard = ({
    slug,
    image,
    category,
    title,
    description,
    date,
}) => {
    return (
        <Link
            to={`/blog-details/${slug}`}
            data-aos="fade-up"
            className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        transition-all
        duration-300
        shadow-[0_20px_50px_rgba(0,0,0,0.14),0_6px_18px_hsl(44_63%_56%/0.25)]
        hover:-translate-y-2
        hover:scale-[1.01]
        hover:shadow-[0_28px_65px_rgba(0,0,0,0.18),0_10px_25px_hsl(44_63%_56%/0.35)]
        flex
        flex-col
      "
        >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
                />

                {/* Category Badge */}
                <span
                    className="
            absolute
            top-4
            right-4
            z-10
            bg-primary
            text-white
            text-sm
            font-semibold
            px-3
            py-1
            rounded-full
            shadow-md
            tracking-wide
            font-bod
          "
                >
                    {category}
                </span>

                {/* Soft Overlay */}
                <div
                    className="
            absolute
            inset-0
            bg-primary/10
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <span className="text-muted-foreground text-sm font-medium">
                    {date}
                </span>

                <h3
                    className="
            text-xl
            font-serif
            font-bold
            mt-2
            mb-3
            transition-colors
            duration-300
            group-hover:text-primary
          "
                >
                    {title}
                </h3>

                <p className="text-muted-foreground text-base line-clamp-3">
                    {description}
                </p>

                {/* Read More */}
                <div className="mt-auto pt-4 flex justify-end">
                    <span
                        className="
              inline-flex
              items-center
              gap-2
              text-primary
              font-semibold
              transition-all
              duration-300
              group-hover:gap-3
            "
                    >
                        Read more
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
