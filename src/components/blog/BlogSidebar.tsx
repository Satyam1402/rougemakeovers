import {
  Droplet,
  TrendingUp,
  Heart,
  PlayCircle,
  Star,
  ArrowRight
} from "lucide-react";
import sunitaProfile from "../../assets/about/sunita-ghosh-profile.jpg"
import { Link } from "react-router-dom";
import { popularTags } from "@/lib/constant";


const BlogSidebar = () => {

  const categories = [
    { name: "Skincare", icon: Droplet, count: 1 },
    { name: "Trends", icon: TrendingUp, count: 3 },
    { name: "Bridal Makeup", icon: Heart, count: 2 },
    { name: "Tutorials", icon: PlayCircle, count: 0 },
    { name: "Reviews", icon: Star, count: 0 },
  ];

  return (
    <aside className="space-y-8">
      {/* Artist */}
      <div
        data-aos="fade-up"
        className="
                w-full
                flex
               flex-col
              items-center
              bg-white
                rounded-2xl
               overflow-hidden
               transition-all
               duration-300
               p-6
              shadow-[0_20px_50px_rgba(0,0,0,0.14),0_6px_18px_hsl(44_63%_56%/0.25)]
               hover:-translate-y-2
              hover:scale-[1.01]
             hover:shadow-[0_28px_65px_rgba(0,0,0,0.18),0_10px_25px_hsl(44_63%_56%/0.35)]
             "
      >
        <div className="w-full flex justify-center items-center">
          <img
            src={sunitaProfile}
            alt="Artist"
            className="
    w-24 h-24
    rounded-full
    mb-4
    border-2
    border-primary
    transition-all
    duration-500
    ease-out
    hover:scale-105
    hover:rotate-1
    hover:shadow-[0_8px_25px_hsl(44_63%_56%/0.35)]
  "
          />
        </div>

        <h4 className="font-bold text-xl text-center font-serif">
          Sunita Ghosh
        </h4>

        <p className="text-primary text-base font-semibold text-center mb-4">
          Lead Artist
        </p>

        {/* First paragraph (always visible) */}
        <p className="text-muted-foreground text-base text-left">
          I didn’t start my career in the beauty world. With an MBA in Finance and a
          stable job at a top financial firm, I was fully settled into the corporate
          life with meetings, deadlines, and spreadsheets.
        </p>

        {/* Expandable content */}
        <div
          className={`
          transition-all
          duration-500
          ease-in-out
          overflow-hidden
          max-h-0 opacity-0
        `}
        >
          <p className="text-muted-foreground text-base mt-3 text-left">
            It was a world of discipline and long hours, and for a while, it felt
            like the “right” path.
          </p>

          <p className="text-muted-foreground text-base mt-3 text-left">
            But somewhere inside, a part of me was waiting to do something more
            meaningful… something that felt like me.
          </p>
        </div>

        {/* More About Me Button */}
        <Link to="/about" className="w-full flex justify-start items-start mt-4">
          <p
            className="group text-primary text-base font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:text-black"
          >
            <span className="relative">
              More about me
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"
              />
            </span>

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </p>
        </Link>

      </div>

      {/* Categories */}
      <div data-aos="fade-up w=full"
        className="
                w-full
                flex
               flex-col
              items-center
              bg-white
                rounded-2xl
               overflow-hidden
               transition-all
               duration-300
               p-6
              shadow-[0_20px_50px_rgba(0,0,0,0.14),0_6px_18px_hsl(44_63%_56%/0.25)]
               hover:-translate-y-2
              hover:scale-[1.01]
             hover:shadow-[0_28px_65px_rgba(0,0,0,0.18),0_10px_25px_hsl(44_63%_56%/0.35)]
             "
      >
        <h3 className="w-full text-left text-lg font-serif font-bold mb-4">
          Categories
        </h3>
        {categories?.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <div
              key={i}
              className="w-full group flex items-center justify-between py-3 px-3 border-b last:border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary/30"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3">
                <Icon
                  size={18}
                  className="text-primary transition-transform duration-300 group-hover:scale-110"
                />

                <span className="font-medium">
                  {cat?.name}
                </span>
              </div>

              {/* Count */}
              <span className="text-muted-foreground text-base">
                {cat?.count}
              </span>
            </div>
          );
        })}
      </div>


      <div
        className="
                w-full
                flex
               flex-col
              items-center
              bg-white
                rounded-2xl
               overflow-hidden
               transition-all
               duration-300
               p-6
              shadow-[0_20px_50px_rgba(0,0,0,0.14),0_6px_18px_hsl(44_63%_56%/0.25)]
               hover:-translate-y-2
              hover:scale-[1.01]
             hover:shadow-[0_28px_65px_rgba(0,0,0,0.18),0_10px_25px_hsl(44_63%_56%/0.35)]
             "
      >
        <h3 className="w-full text-left text-lg font-serif font-bold mb-4">
          Popular Tags
        </h3>

        <div className="w-full flex flex-wrap gap-3">
          {popularTags?.map((tag, index) => (
            <button
              key={index}
              className="
              px-4
              py-1.5
              rounded-full
              text-sm
              font-medium
              border
              border-gray-200
              text-muted-foreground
              transition-all
              duration-300
              hover:border-primary
              hover:text-primary
              hover:bg-[hsl(44_63%_56%/0.08)]
              hover:-translate-y-[2px]
            "
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
};


export default BlogSidebar;
