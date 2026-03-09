import PrimaryLink from "./ui/primaryLink"
import recentWork1 from "@/assets/home/recent-work/recent-work-1.jpg";
import recentWork2 from "@/assets/home/recent-work/recent-work-2.jpg";
import recentWork3 from "@/assets/home/recent-work/recent-work-3.jpg";
import recentWork4 from "@/assets/home/recent-work/recent-work-4.jpg";
import recentWork5 from "@/assets/home/recent-work/recent-work-5.jpg";
import recentWork6 from "@/assets/home/recent-work/recent-work-6.jpg";
import recentWork7 from "@/assets/home/recent-work/recent-work-7.jpg";
import recentWork8 from "@/assets/home/recent-work/recent-work-8.jpg";
import Appointment from "./Appointment";

const RecentWork = () => {

    const recentWork = [
        { src: recentWork1, category: "Recent Work" },
        { src: recentWork2, category: "Recent Work" },
        { src: recentWork3, category: "Recent Work" },
        { src: recentWork4, category: "Recent Work" },
        { src: recentWork5, category: "Recent Work" },
        { src: recentWork6, category: "Recent Work" },
        { src: recentWork7, category: "Recent Work" },
        { src: recentWork8, category: "Recent Work" },
        { src: "", category: "Recent Work" },
    ];

    return (
        <section className="sm:py-20 py-10 flex justify-center items-center">
            <div className="max-w-[1100px] mx-auto px-2">
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary">
                        Recent Work
                    </h2>
                    <p className="text-muted-foreground max-w-4xl mx-auto text-lg sm:text-xl">
                        Behind every look is a conversation, a shared vision, and a lot of heart. These are real moments, real emotions, and beauty that feels like natural, effortless, and timeless in every frame.
                    </p>
                </div>

                <section className="w-full mt-12 flex flex-col justify-center items-center gap-3">
                    {/* <ScrollableTabs tabs={tabsData} activeCategory={activeCategory} setActiveCategory={setActiveCategory} /> */}
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 sm:gap-4 gap-2">
                        {recentWork?.map((item, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 group"
                                data-aos="zoom-in"
                            >
                                {item?.src &&
                                    <img
                                        src={item?.src}
                                        alt={`Bridal makeup ${index + 1}`}
                                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                                    />}
                                {!item?.src &&
                                    <div
                                        className="relative hidden sm:block w-full h-full rounded-lg overflow-hidden shadow-2xl"
                                        style={{
                                            background:
                                                "radial-gradient(circle at top, rgba(180,180,160,0.6), rgba(25,30,10,0.95))",
                                        }}
                                    >
                                        {/* Overlay */}
                                        <div className="absolute w-full h-full inset-0 bg-black/30" />

                                        {/* Content */}
                                        <div className="relative w-full h-full z-10 flex flex-col items-center justify-center text-center p-3">
                                            <h2 className="text-white text-xl lg:text-3xl font-serif mb-2 lg:mb-4">
                                                See More?
                                            </h2>


                                            <p className="text-gray-200 text-sm lg:text-base leading-relaxed mb-5 lg:mb-10">
                                                Discover our full gallery <br />
                                                of unforgettable <br />
                                                moments.
                                            </p>
                                            <PrimaryLink label="View Portfolio" path="/portfolio" className="text-sm lg:text-xl" />
                                        </div>
                                    </div>

                                }
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* see more on mobile screen */}
                    <div
                        className="relative block sm:hidden w-full h-full rounded-lg overflow-hidden shadow-2xl"
                        style={{
                            background:
                                "radial-gradient(circle at top, rgba(180,180,160,0.6), rgba(25,30,10,0.95))",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute w-full h-full inset-0 bg-black/30" />

                        {/* Content */}
                        <div className="relative w-full h-full z-10 flex flex-col items-center justify-center text-center p-3">
                            <h2 className="text-white text-2xl font-serif mb-4">
                                See More?
                            </h2>


                            <p className="text-gray-200 text-base leading-relaxed mb-5 lg:mb-10">
                                Discover our full gallery <br />
                                of unforgettable <br />
                                moments.
                            </p>
                            <PrimaryLink label="View Portfolio" path="/portfolio" className="text-xl" />
                        </div>
                    </div>
                </section>

                {/* Contact Us form */}
                <section className="w-full flex justify-center items-center mt-10 sm:mt-20">
                    <Appointment />
                </section>
            </div>
        </section>
    )
}

export default RecentWork
