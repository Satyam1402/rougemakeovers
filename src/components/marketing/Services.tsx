import sunita5 from "@/assets/about/sunita-5.jpg";

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-br from-amber-50 to-orange-50 py-10 md:py-20 px-2 mx-auto flex justify-center items-center">
      <div className="w-full sm:max-w-[1100px] mx-auto px-2">
        <div className="w-full grid md:grid-cols-2 gap-8 xl:gap-16 items-center mx-auto">

          {/* Left Content */}
          <div className="w-full space-y-6 mx-auto lg:mx-0">

            <p className="w-full text-center md:text-left text-primary text-sm font-semibold uppercase tracking-wider">
              ROUGE MAKEOVERS
            </p>


            <h2 className="w-full text-center md:text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair">
              Our
              <span className="text-primary ml-3">Philosophy</span>
            </h2>

            <div className="space-y-4 text-gray-600 w-full">
              <p className="text-gray-600 leading-relaxed text-base">
                At Rouge Makeovers, we believe that makeup is an art form that
                should <strong>enhance, not mask</strong>, your natural beauty.
                Our philosophy centers on creating looks that make you feel like
                the absolute best version of yourself.
              </p>

              <p className="text-gray-600 leading-relaxed text-base">
                We stay updated with the latest trends and techniques while
                respecting the timeless principles of bridal beauty. Using only
                <strong> premium, long-lasting products</strong>, we ensure your
                makeup withstands tears of joy, dancing, and countless
                photographs throughout your celebration.
              </p>

              <p className="text-gray-600 leading-relaxed text-base">
                Your wedding day is one of the most important days of your life.
                Our commitment is to provide not just exceptional makeup
                artistry, but also a <strong>calm, enjoyable experience</strong>
                that helps you feel relaxed and confident.
              </p>
            </div>
          </div>

          {/* Right Images - Responsive Layout */}
          <div className="rounded-2xl overflow-hidden shadow-xl w-full">
            <img
              src={sunita5}
              alt="Makeup Artist at Work"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
