import PrimaryLink from "./ui/primaryLink";
import destinationImage from "@/assets/destination-wedding.jpg";
import luxuryBridal from "@/assets/service/Luxury Bridal Makeup.jpg";
import engagement from "@/assets/service/Engagement _ Sangeet_ Haldi.jpg";
import bridalTrial from "@/assets/service/BRIDAL-TRIAL.jpg";
import destination from "@/assets/service/destination-bridal-package.jpg";
import useHashScroll from "@/hooks/useHashScroll";

const services = [
    {
        title: "LUXURY BRIDAL MAKEUP (MAIN EVENT)",
        subtitle: "From the First Look to the Final Hour",
        image: luxuryBridal,
        description:
            "Our luxury bridal makeup delivers a flawless, timeless, high-definition look using premium products and advanced techniques, enhancing natural beauty with long-lasting comfort and perfect photo-ready elegance.",
    },
    {
        title: "ENGAGEMENT, SANGEET, MEHENDI, HALDI, WEDDING, RECEPTION LOOK",
        subtitle: "Each Moment Deserves Its Own Glow.",
        image: engagement,
        description:
            "Each look is thoughtfully designed to complement your outfit, décor, and lighting from fresh Mehendi and Haldi styles to elegant Wedding and Reception finishes ensuring you look flawless in person and in photos."
    },
    {
        title: "DESTINATION BRIDAL PACKAGE",
        subtitle: "Your Beauty Team, Wherever Love Takes You.",
        image: destination,
        description:
            "Complete on-location bridal support for destination weddings, covering multiple events and last-minute touch-ups, ensuring a seamless, personalised experience so you look flawless, confident, and stress-free throughout every celebration."
    },
    {
        title: "PRE-WEDDING LOOKS",
        subtitle: "Setting the Tone Before the Big Day.",
        image: destinationImage,
        description:
            "Fresh, dewy, and minimalist looks designed for daylight events, enhancing natural features without heaviness. Perfect for pre-wedding moments, they photograph beautifully and keep you comfortable and radiant."
    },
    {
        title: "BRIDAL TRIAL, CONSULTATION SESSION",
        subtitle: "Your Preview to Perfection.",
        image: bridalTrial,
        description:
            "A detailed skin analysis, look preview, and product compatibility check to understand your preferences and comfort, ensuring a confident, flawless bridal look with no surprises on your big day."
    }
];

const ServiceList = () => {
    useHashScroll()

    return (
        <section className="w-full flex flex-col justify-center items-center gap-5 sm:gap-8">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Our Premium Services</h2>
            <div className="w-full grid grid-cold-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services?.map((item, index) => (
                    <div
                        key={index}
                        className="group bg-white w-full rounded-2xl 
                shadow-lg hover:shadow-2xl 
                transition-all duration-500 ease-out 
                overflow-hidden flex flex-col h-full
                hover:-translate-y-2 hover:scale-[1.02]"
                    >
                        {/* Image */}
                        <div className="relative w-full overflow-hidden">
                            <img
                                src={item?.image}
                                alt={item?.title}
                                className="h-[240px] w-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full p-3 flex flex-col flex-1">
                            <h3 className="w-full text-left text-lg font-bold text-gray-900 mb-3">
                                {item?.title}
                            </h3>

                            <p className="w-full text-left text-gray-600 text-base leading-relaxed mb-3">
                                {item?.description}
                            </p>

                            {/* Button fixed at bottom */}
                            <div
                                className="mt-auto flex w-full justify-center items-center"
                            >
                                <PrimaryLink label="Book Now" path="#appointment" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default ServiceList