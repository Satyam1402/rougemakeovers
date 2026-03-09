import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Karishma',
      date: 'Married Oct 2023',
      text: 'Your hands are truly magical—thank you for making me feel so beautiful 😍 I don’t think I will ever opt any other makeup artist now..Loved ur work and u as well ❤️❤️❤️.',
      initials: 'K'
    },
    {
      name: 'Saloni Pimpale',
      date: 'Married Dec 2024',
      text: 'Hi Sunita We received our wedding videos from the photographer I just love all my looks pecially the wedding one It’s so radiant and beautiful yet so natural and subtle Exactly what I wanted hank you so much for adding your magical touch to my special dayYou are my favourite ❤️.',
      initials: 'SP'
    },
    {
      name: 'Kajal Kothari',
      date: 'Married Nov 2025',
      text: 'Most important person  who made this one of my best shoot are hands down –@ROUGE_MAKEOVERS.',
      initials: 'KK'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 sm:py-20 px-2 flex justify-center items-center">
      <div className="w-full max-w-[1100px] flex flex-col justify-center items-center gap-8">

        {/* Header */}
        <div className="w-full text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            LOVE NOTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Client <span className="text-primary italic">Testimonials</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 
                 flex flex-col h-full
                 transition-all duration-300 hover:bg-gray-800/70 
                 hover:-translate-y-2 hover:shadow-2xl 
                 border border-gray-700/30"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-primary" size={30} strokeWidth={1.5} />
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Client Info – fixed at bottom */}
              <div className="mt-auto flex items-center gap-4 pt-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm sm:text-base">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name & Date */}
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  {/* <div className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.date}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
