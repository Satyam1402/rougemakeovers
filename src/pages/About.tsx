import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles, ChevronLeft, ChevronRight, Gem, Leaf } from "lucide-react";
import sunita1 from "@/assets/about/sunita-1.jpg";
import sunita2 from "@/assets/about/sunita-2.jpg";
import sunita3 from "@/assets/about/sunita-3.jpg";
import sunita4 from "@/assets/about/sunita-4.jpg";
import sunita5 from "@/assets/about/sunita-5.jpg";
import Appointment from "@/components/Appointment";


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    { icon: <Award className="w-8 h-8" />, number: "500+", label: "Happy Brides" },
    { icon: <Heart className="w-8 h-8" />, number: "10+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "100+", label: "Destination Weddings" },
    { icon: <Sparkles className="w-8 h-8" />, number: "1000+", label: "Makeup Looks" },
  ];

  const storySlides = [
    {
      image: sunita1,
      content: [
        "I didn’t start my career in the beauty world. With an MBA in Finance and a stable job at a top financial firm, I was fully settled into the corporate life with meetings, deadlines, and spreadsheets.",

        "It was a world of discipline and long hours, and for a while, it felt like the “right” path.",

        "But somewhere inside, a part of me was waiting to do something more meaningful… something that felt like me."
      ],
    },
    {
      image: sunita4,
      content: [
        'Then came "motherhood" the moment that changed everything.',
        "Becoming a mother slowed me down in the best way possible. It gave me the space to ask myself questions I had ignored for years. I realised I wanted a life where I could be present, where I had flexibility, and where my work didn’t feel like work… it felt like passion.",
        "That pause pushed me to rediscover who I truly was."
      ],
    },
    {
      image: sunita3,
      content: [
        "During that phase of reflection, I found makeup.",
        "What started as a simple interest quickly became something I looked forward to every day. I loved how makeup could boost confidence, bring a smile, and make someone feel special.",
        "Slowly, that love turned into a dream and that dream became my career. It wasn’t easy to start over, but it felt right… it felt like home."
      ],
    },
    {
      image: sunita2,
      content: [
        "Today, I am the founder of Rouge Makeovers, and a Luxury Bridal Makeup Artist who has had the honour of being a part of countless love stories.From traditional home weddings to breathtaking destination ceremonies, I’ve worked with brides from all walks of life, each one unique, each one unforgettable.",
        "For me, makeup isn’t about changing someone. It’s about highlighting their natural beauty, telling their story, and making them feel their most confident, radiant self on their biggest day.",
        "This journey has been emotional, inspiring, and full of gratitude and I’m thankful to every bride who has trusted me with one of the most precious moments of her life."
      ],
    },
  ];


  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === storySlides.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? storySlides.length - 1 : prev - 1
    );
  };

  const currentSlide = storySlides[currentIndex];


  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">

      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 bg-secondary">
        <div className="w-full container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gradient">
              About Rouge Makeovers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting Beauty, Creating Memories
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full flex justify-center items-center pt-5 pb-20 sm:py-20">
        <div className="w-full container max-w-[1110px] px-2 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-start">
            <h2 className="text-4xl text-center font-playfair font-bold block md:hidden mb-8">
              My Story
            </h2>
            {/* IMAGE */}
            <div data-aos="fade-up">
              <img
                src={currentSlide.image}
                alt="Rouge Makeovers Artist"
                className="rounded-lg shadow-elegant w-full transition-all duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="msd:space-y-6 space-y-4" data-aos="fade-up">
              <h2 className="text-4xl font-playfair font-bold hidden md:block">
                My Story
              </h2>

              {currentSlide?.content?.map((text, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>

          </div>

          {/* FIXED PREV / NEXT BUTTONS */}
          <div className="absolute -bottom-14 sm:-bottom-8 lg:bottom-0 right-6 flex gap-4 z-10">
            <button
              onClick={handlePrev}
              className="group p-3 rounded-full border border-[#D7A644] bg-[#D7A644] text-white shadow-lg transition-all duration-300 ease-out hover:bg-transparent hover:text-[#D7A644] hover:shadow-xl active:scale-95"
            >
              <ChevronLeft
                size={20}
                strokeWidth={3}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            <button
              onClick={handleNext}
              className="group p-3 rounded-full border border-[#D7A644] bg-[#D7A644] text-white shadow-lg transition-all duration-300 ease-out hover:bg-transparent hover:text-[#D7A644] hover:shadow-xl active:scale-95"
            >
              <ChevronRight
                size={20}
                strokeWidth={3}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>


        </div>
      </section>


      {/* Achievements */}
      <section className="w-full flex justify-center items-center py-10 sm:py-20 bg-secondary">
        <div className="w-full container max-w-[1110px] px-2">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-playfair font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              A decade of dedication to beauty and excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements?.map((item, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300"
                data-aos="zoom-in"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center text-primary">{item?.icon}</div>
                  <div className="text-3xl font-bold text-primary">{item?.number}</div>
                  <div className="text-sm text-muted-foreground">{item?.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full py-10 sm:py-20">
        <section className="w-full flex justify-center items-center">
          <div className="max-w-[1100px] w-full px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

              <h2 className="text-4xl md:text-5xl text-center font-serif font-semibold text-gray-900 block md:hidden">
                Our <span className="italic text-primary">Philosophy</span>
              </h2>

              {/* IMAGE SECTION */}
              <div className="w-full relative flex flex-col justify-center">

                <div className="rounded-3xl overflow-hidden shadow-xl w-full">
                  <img
                    src={sunita5}
                    alt="Makeup Artist at Work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 right-6 bg-white rounded-full p-4 shadow-lg">
                  <span className="text-sm tracking-wide font-medium text-gray-700">
                    TIMELESS
                  </span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="space-y-4 md:space-y-6">
                <p className="uppercase tracking-widest text-base text-primary hidden md:block">
                  Rouge Makeovers
                </p>

                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 hidden md:block">
                  Our <span className="italic text-primary">Philosophy</span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  At Rouge Makeovers, we believe that makeup is an art form that
                  should <strong>enhance, not mask</strong>, your natural beauty.
                  Our philosophy centers on creating looks that make you feel like
                  the absolute best version of yourself.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We stay updated with the latest trends and techniques while
                  respecting the timeless principles of bridal beauty. Using only
                  <strong> premium, long-lasting products</strong>, we ensure your
                  makeup withstands tears of joy, dancing, and countless
                  photographs throughout your celebration.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Your wedding day is one of the most important days of your life.
                  Our commitment is to provide not just exceptional makeup
                  artistry, but also a <strong>calm, enjoyable experience</strong>
                  that helps you feel relaxed and confident.
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFE4D2] flex items-center justify-center">
                      <Gem className="text-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Premium Quality
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFE4D2] flex items-center justify-center">
                      <Leaf className="text-primary]" size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Calm Experience
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>

      <section className="w-full flex justify-center items-center mb-10">
        <div className="w-full container max-w-[1110px] px-2">
          <Appointment />
        </div>
      </section>

    </div>
  );
};

export default About;
