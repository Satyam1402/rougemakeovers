import bridal1 from "@/assets/portfolio/bridal1.jpg";
import bridal2 from "@/assets/portfolio/bridal2.jpg";
import bridal3 from "@/assets/portfolio/bridal3.jpg";
import bridal4 from "@/assets/portfolio/bridal4.jpg";
import engagement1 from "@/assets/portfolio/engagement1.jpg";
import engagement2 from "@/assets/portfolio/engagement2.jpg";
import engagement3 from "@/assets/portfolio/engagement3.jpg";
import hairStyle1 from "@/assets/portfolio/hair-styling-1.jpg";
import hairStyle2 from "@/assets/portfolio/hair-styling-2.jpg";
import hairStyle3 from "@/assets/portfolio/hair-styling-3.jpg";
import hairStyle4 from "@/assets/portfolio/hair-styling-4.jpg";
import hairStyle5 from "@/assets/portfolio/hair-styling-5.jpg";
import celebrity1 from "@/assets/portfolio/celeb1.jpg";
import celebrity2 from "@/assets/portfolio/celeb2.jpg";
import celebrity3 from "@/assets/portfolio/celeb3.jpg";
import celebrity4 from "@/assets/portfolio/celeb4.jpg";
import haldi1 from "@/assets/portfolio/haldi1.jpg"
import haldi2 from "@/assets/portfolio/haldi2.jpg";
import mehendi1 from "@/assets/portfolio/mehendi1.jpg";
import mehendi2 from "@/assets/portfolio/mehendi2.jpg";
import mehendi3 from "@/assets/portfolio/mehendi3.jpg";
import mehendi4 from "@/assets/portfolio/mehendi4.jpg";
import party1 from "@/assets/portfolio/party1.jpg";
import party2 from "@/assets/portfolio/party2.jpg";
import party3 from "@/assets/portfolio/party3.jpg";
import party4 from "@/assets/portfolio/party4.jpg";
import sangeet1 from "@/assets/portfolio/sangeet1.jpg";
import sangeet2 from "@/assets/portfolio/sangeet2.jpg";
import sangeet3 from "@/assets/portfolio/sangeet3.jpg";
import sangeet4 from "@/assets/portfolio/sangeet4.jpg";
import ScrollableTabs from "@/components/ui/scrollableTabs";
import { useState } from "react";
import Appointment from "@/components/Appointment";
import PrimaryLink from "@/components/ui/primaryLink";
import useHashScroll from "@/hooks/useHashScroll";
import banner from "@/assets/portfolio/banner.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  useHashScroll()

  const portfolioImages = [
    // ================= BRIDAL =================
    { src: bridal1, title: "Traditional Bridal Look", category: "Bridal" },
    { src: bridal2, title: "Royal Bridal Glam", category: "Bridal" },
    { src: bridal3, title: "Classic Bridal Elegance", category: "Bridal" },
    { src: bridal4, title: "Modern Bridal Look", category: "Bridal" },

    // ================= ENGAGEMENT =================
    { src: engagement1, title: "Engagement Soft Glam", category: "Engagement" },
    { src: engagement2, title: "Peach Tone Engagement Look", category: "Engagement" },
    { src: engagement3, title: "Rosy Engagement Look", category: "Engagement" },

    // ================= HALDI =================
    { src: haldi1, title: "Fresh Haldi Glow", category: "Haldi" },
    { src: haldi2, title: "Natural Haldi Look", category: "Haldi" },


    // ================= MEHNDI =================
    { src: mehendi1, title: "Mehndi Day Soft Glam", category: "Mehndi" },
    { src: mehendi2, title: "Green Theme Mehndi Look", category: "Mehndi" },
    { src: mehendi3, title: "Boho Mehndi Look", category: "Mehndi" },
    { src: mehendi4, title: "Daylight Mehndi Look", category: "Mehndi" },


    // ================= SANGEET =================
    { src: sangeet1, title: "Bold Sangeet Glam", category: "Sangeet" },
    { src: sangeet2, title: "Smokey Eyes Sangeet Look", category: "Sangeet" },
    { src: sangeet3, title: "Dance Night Sangeet Look", category: "Sangeet" },
    { src: sangeet4, title: "Shimmer Sangeet Look", category: "Sangeet" },


    // ================= PARTY =================
    { src: party1, title: "Evening Party Glam", category: "Party" },
    { src: party2, title: "Cocktail Party Look", category: "Party" },
    { src: party3, title: "Bold Party Look", category: "Party" },
    { src: party4, title: "Soft Party Glam", category: "Party" },


    // ================= CELEBRITY =================
    { src: celebrity1, title: "Celebrity Red Carpet Look", category: "Celebrity" },
    { src: celebrity2, title: "Bollywood Inspired Look", category: "Celebrity" },
    { src: celebrity3, title: "High Fashion Celebrity Look", category: "Celebrity" },
    { src: celebrity4, title: "Editorial Celebrity Look", category: "Celebrity" },


    // ================= HAIR STYLE =================
    { src: hairStyle1, title: "Elegant Hair Style", category: "Hair Style" },
    { src: hairStyle2, title: "Bridal Hair Bun", category: "Hair Style" },
    { src: hairStyle3, title: "Soft Curls Look", category: "Hair Style" },
    { src: hairStyle4, title: "Traditional Braided Style", category: "Hair Style" },
    { src: hairStyle5, title: "Modern Party Hair Style", category: "Hair Style" },
  ];


  const clientData = [
    {
      name: "Karishma",
      text: "Your hands are truly magical—thank you for making me feel so beautiful 😍 I don’t think I will ever opt any other makeup artist now..Loved ur work and u as well ❤️❤️❤️.",
      rating: 5
    },
    {
      name: "Saloni Pimpale",
      text: "Hi Sunita We received our wedding videos from the photographer I just love all my looks pecially the wedding one It’s so radiant and beautiful yet so natural and subtle Exactly what I wanted hank you so much for adding your magical touch to my special dayYou are my favourite ❤️.",
      rating: 5
    },
    {
      name: "Kajal Kothari",
      text: "Most important person who made this one of my best shoot are hands down –@ROUGE_MAKEOVERS.",
      rating: 5
    }
  ]

  const filterData = activeCategory === "All" ? portfolioImages : portfolioImages?.filter((items) => items?.category === activeCategory);


  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative mt-[60px] sm:mt-[78px] min-h-[300px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        />

        {/* Soft Overlay (NO heavy blur) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gradient">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our collection of beautiful bridal transformations
          </p>
        </div>
      </section>


      {/* Portfolio Grid */}
      <section className="container w-full px-4 py-10 flex flex-col justify-center items-center gap-8">
        <ScrollableTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filterData?.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
              data-aos="zoom-in"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item?.src}
                  alt={item?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end sm:p-4 p-1">
                <span className="text-sm font-medium text-primary mb-1">{item?.category}</span>
                <h3 className="text-base font-playfair font-bold text-primary">{item?.title}</h3>
                <div className="w-full flex justify-center items-center mt-3">
                  <PrimaryLink label="Book Now" path="#appointment" className="text-sm sm:text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-playfair font-bold mb-4">What Our Brides Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our beautiful brides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientData?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial?.text}"
                </p>

                {/* Name at Bottom */}
                <p
                  id="appointment"
                  className="font-semibold text-primary mt-auto"
                >
                  – {testimonial?.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full flex justify-center items-center my-20">
        <div className="w-full container max-w-[1110px] px-2">
          <Appointment />
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
