import { ChevronLeft, ChevronRight } from "lucide-react";
import sunita1 from "@/assets/about/sunita-1.jpg";
import sunita2 from "@/assets/about/sunita-2.jpg";
import sunita3 from "@/assets/about/sunita-3.jpg";
import sunita4 from "@/assets/about/sunita-4.jpg";
import { useState } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  );
};

export default About;
