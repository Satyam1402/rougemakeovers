import { Award, Heart, Users, Sparkles } from "lucide-react";
import titleImage from "@/assets/home/luxury-text.png";
import bg1 from "@/assets/home/bg-image-1.png";
import bg2 from "@/assets/home/bg-image-2.jpg";
import image1 from "../assets/bride-portfolio-1.jpg"
import image2 from "../assets/bride-portfolio-12.jfif"
import image3 from "../assets/bride-portfolio-3.jpg"
import image4 from "../assets/bride-portfolio-15.jfif"
import image5 from "../assets/bride-portfolio-16.jfif"
import image6 from "../assets/bride-portfolio-17.jfif"
import { Card, CardContent } from "@/components/ui/card";
import artistImage from "@/assets/about/sunita-1.jpg";
import ServiceList from "@/components/ServiceList";
import Appointment from "@/components/Appointment";
import PrimaryLink from "@/components/ui/primaryLink";
import useHashScroll from "@/hooks/useHashScroll";

const Marketing = () => {
    const phoneNumber = "+919324708781";
    useHashScroll()

    const achievements = [
        { icon: <Award className="w-10 h-10" />, number: "500+", label: "Happy Brides" },
        { icon: <Heart className="w-10 h-10" />, number: "10+", label: "Years Experience" },
        { icon: <Users className="w-10 h-10" />, number: "100+", label: "Destination Weddings" },
        { icon: <Sparkles className="w-10 h-10" />, number: "1000+", label: "Makeup Looks" },
    ];

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <div
                    style={{ backgroundImage: `url(${bg1})` }}
                    className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
                >
                    <div className="w-full max-w-[1100px] flex flex-col justify-center items-center px-2 gap-5 py-10 sm:py-12">
                        <section className="flex flex-col justify-center items-center gap-4 text-center py-8 sm:py-16">
                            <h1
                                className="font-akzidenz font-semibold tracking-[0.3em] uppercase text-[1.5rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.62rem]"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                THE FINE ART OF
                            </h1>

                            <img
                                src={titleImage}
                                className="w-full h-auto"
                                alt="title-image"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />

                            <p className="mx-auto text-xl leading-9 text-gray-600">
                                Crafting timeless and elegant bridal looks for elite weddings and luxury celebrations. With expert attention to detail, we enhance natural beauty through flawless makeup and refined styling. Every look is designed to last, giving every bride confidence, grace, and unforgettable artistry.
                            </p>

                            <div className="mt-4 sm:mt-6 flex justify-center items-center">
                                <PrimaryLink label="Book Now" path="#appointment" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
                                <img src={image1} className="rounded-xl w-full" />
                                <img src={image2} className="rounded-xl w-full" />
                                <img src={image3} className="rounded-xl w-full" />
                            </div>
                        </section>

                        <section className="w-full pb-10 sm:py-10">
                            <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-4xl font-playfair font-bold mb-4">Our Journey in Numbers</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    A decade of dedication to beauty and excellence
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                                {achievements.map((item, index) => (
                                    <Card
                                        key={index}
                                        className="border-border hover:shadow-elegant transition-all duration-300"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <CardContent className="p-6 text-center space-y-4">
                                            <div className="flex justify-center text-primary">{item.icon}</div>
                                            <div className="text-4xl font-bold text-primary">{item.number}</div>
                                            <div className="text-md text-muted-foreground">{item.label}</div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section className="w-full sm:py-10">
                            <div className="w-full grid md:grid-cols-2 gap-10 items-center">
                                <img
                                    src={artistImage}
                                    className="rounded-xl w-full"
                                />

                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-playfair font-bold">About Rouge Makeovers</h2>
                                    <p className="mt-4 text-gray-600">
                                        At Rouge Makeovers, every look is crafted with intention. Founded by Sunita, a luxury bridal makeup artist who has had the joy of transforming countless brides from intimate local ceremonies to grand destination weddings "the focus here is simple: make every woman feel like the most beautiful version of herself
                                    </p>
                                    <p className="mt-4 text-gray-600">
                                        For us, makeup isn’t just a service; it’s a moment. A moment where elegance, comfort and confidence come together to create a look that feels timeless, radiant and truly you. Whether it’s your big day or a special celebration, we’re here to make it unforgettable.
                                    </p>

                                    <div className="mt-6 flex justify-start items-center">
                                        <PrimaryLink label="Book Now" path="#appointment" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <section
                    style={{ backgroundImage: `url(${bg2})` }}
                    className="w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-10 sm:py-20"
                >
                    <div className="w-full max-w-[1100px] flex flex-col justify-center items-center gap-16 px-2">
                        <div className="w-full text-center flex flex-col justify-center items-center gap-5 sm:gap-10">
                            <div className="w-full mx-auto flex flex-col justify-center items-center gap-5">
                                <ServiceList />
                            </div>
                        </div>

                        <section className="text-center">
                            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">Our Portfolio</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4">
                                <img src={image4} className="rounded-xl w-full" />
                                <img src={image5} className="rounded-xl w-full" />
                                <img src={image6} className="rounded-xl w-full" />
                            </div>

                            <div id="appointment" className=" mt-6 flex justify-center items-center">
                                <div>
                                    <PrimaryLink label="Book Now" path="#appointment" />
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* Contact Us form */}
                <section id="appointment" className="w-full flex justify-center items-center my-10">
                    <div className="w-full container max-w-[1110px] px-2">
                        <Appointment />
                    </div>
                </section>
            </div>

        </>
    );
};

export default Marketing;
