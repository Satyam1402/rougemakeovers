import { useRef, useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    LayoutGrid,
} from "lucide-react";
import Bridal from "@/assets/portfolio/category-icons/bridal.svg";
import Engagement from "@/assets/portfolio/category-icons/engagement.svg";
import Haldi from "@/assets/portfolio/category-icons/haldi.svg";
import Mehndi from "@/assets/portfolio/category-icons/mehendi.svg";
import Sangeet from "@/assets/portfolio/category-icons/sangeet.svg";
import Party from "@/assets/portfolio/category-icons/party.svg";
import Celebrity from "@/assets/portfolio/category-icons/celebrity.svg";
import HairStyle from "@/assets/portfolio/category-icons/hairstyle.svg";

interface IProps {
    activeCategory: string,
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}

const tabsData = [
    { icon: LayoutGrid, label: "All" },
    { icon: Bridal, label: "Bridal" },
    { icon: Engagement, label: "Engagement" },
    { icon: Haldi, label: "Haldi" },
    { icon: Mehndi, label: "Mehndi" },
    { icon: Sangeet, label: "Sangeet" },
    { icon: Party, label: "Party" },
    { icon: Celebrity, label: "Celebrity" },
    { icon: HairStyle, label: "Hair Style" },
];


export default function ScrollableTabs({ activeCategory, setActiveCategory }: IProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const scroll = (direction: "left" | "right"): void => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleResize = () => updateScrollButtons();

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            updateScrollButtons();
            scrollElement.addEventListener("scroll", updateScrollButtons);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            if (scrollElement) scrollElement.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative w-full bg-neutral-200 rounded-md flex  justify-center items-center gap-8 shadow-lg scrollbar-none pt-6 pb-3">
            {/* Left Scroll Button */}
            {canScrollLeft && (
                <div className="absolute left-0 bg-neutral-200 pb-3">
                    <button
                        onClick={() => scroll("left")}
                        className="ml-2 flex justify-center items-center z-10 bg-primary hover:bg-white text-black p-2 aspect-square rounded-full transition-all duration-200 border-2 border-primary"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" strokeWidth={3} />
                    </button>
                </div>
            )}

            {/* Scrollable Tabs */}
            <div
                ref={scrollRef}
                className={`w-full flex ${canScrollRight || canScrollLeft ? "justify-start" : "justify-center"
                    } items-center gap-5 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-5`}
            >
                {tabsData.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeCategory === tab.label;

                    return (
                        <div
                            key={tab.label}
                            onClick={() => setActiveCategory(tab.label)}
                            className={`flex items-center gap-1 cursor-pointer whitespace-nowrap min-w-max px-3 pb-3 border-b-4 transition-all duration-200
                              ${isActive
                                    ? "border-primary"
                                    : "border-transparent text-black  hover:text-primary"
                                }
                           `}
                        >
                            {/* Icon */}
                            <span className="flex items-center justify-center flex-shrink-0">
                                {tab.label === "All" ? (
                                    <Icon className="w-6 h-6 flex-shrink-0 mr-2" />
                                ) : (
                                    <img
                                        src={Icon}
                                        alt={tab.label}
                                        className="w-8 h-8 object-contain flex-shrink-0"
                                    />
                                )}
                            </span>

                            {/* Label */}
                            <span className="font-semibold text-base">
                                {tab.label}
                            </span>
                        </div>


                    );
                })}
            </div>

            {/* Right Scroll Button */}
            {canScrollRight && (
                <div className="absolute right-0 bg-neutral-200 pb-3">
                    <button
                        onClick={() => scroll("right")}
                        className="mr-2 flex justify-center items-center z-10 bg-primary text-black p-2 aspect-square rounded-full transition-all duration-200 border-2 border-primary"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" strokeWidth={3} />
                    </button>
                </div>
            )}
        </div>
    );
}
