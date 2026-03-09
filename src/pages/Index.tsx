import bg1 from "@/assets/home/bg-image-1.png";
import bg2 from "@/assets/home/bg-image-2.jpg";
import titleImage from "@/assets/home/luxury-text.png";
import secondImage from "@/assets/home/image-2.png";
import rogueText from "@/assets/home/rouge-makeovers.png";
// import instaQr from "@/assets/home/insta-qr.png";
import call from "@/assets/home/call.png";
import image1 from "@/assets/home/first-banner-1.jpg";
import image2 from "@/assets/home/first-banner-2.jpg";
import image3 from "@/assets/home/first-banner-3.jpg";
import RecentWork from "@/components/RecentWork";

const Index = () => {

  return (
    <div className="w-full min-h-screen">
      <section
        className="mt-[65px] md:mt-[75px] w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >


        {/* Main Container */}
        <div className="w-full max-w-[1100px] flex flex-col justify-center items-center px-2 pt-2` pb-10">

          <h1
            className="font-akzidenz font-semibold tracking-[0.3em] uppercase text-[1rem] sm:text-[1.5rem]"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            THE FINE ART OF
          </h1>

          <img
            src={titleImage}
            className="w-full h-auto max-w-[600px]"
            alt="title-image"
            data-aos="zoom-in"
            data-aos-delay="200"
          />

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            <img src={image1} className="rounded-xl w-full h-auto" data-aos="fade-up" />
            <img src={image2} className="rounded-xl w-full h-auto" data-aos="fade-up" />
            <img src={image3} className="rounded-xl w-full h-auto" data-aos="fade-up" />
          </div>

          {/* Gray Box */}
          <div
            className="w-full bg-[#5C5C5C]/90 py-6 mt-6 rounded-md"
            data-aos="fade-up"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white text-center px-4">

              {/* ITEM 1 */}
              <div className="flex flex-col items-center w-full md:w-auto px-6">
                <p
                  className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[1.7rem] lg:text-[1.9rem]"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span className="leading-[2.2rem] block">
                    Fashion, Editorial <br /> & Celebrity Makeup
                  </span>
                </p>
              </div>

              {/* DIVIDER */}
              <div className="w-3/4 h-[2px] bg-[#D7A644] my-6 md:my-0 md:w-[4px] md:h-16" />

              {/* ITEM 2 */}
              <div className="flex flex-col items-center w-full md:w-auto px-6">
                <p
                  className="font-mont font-semibold text-xl sm:text-2xl md:text-[1.7rem] lg:text-[1.9rem]"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span className="leading-[2.2rem] block">
                    Bridal Makeup <br /> Services
                  </span>
                </p>
              </div>

              {/* DIVIDER */}
              <div className="w-3/4 h-[2px] bg-[#D7A644] my-6 md:my-0 md:w-[4px] md:h-16" />

              {/* ITEM 3 */}
              <div className="flex flex-col items-center w-full md:w-auto px-6">
                <p
                  className="font-mont font-semibold text-xl sm:text-2xl md:text-[1.7rem] lg:text-[1.9rem]"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <span className="leading-[2.2rem] block">
                    Party & Occasion <br /> Makeup
                  </span>
                </p>
              </div>

            </div>
          </div>


          {/* Rogue Section */}
          <section className="w-full flex flex-col md:flex-row items-start gap-6 md:gap-8 my-6 sm:my-8" data-aos="fade-up">
            <div className="w-full hidden  md:w-auto sm:flex justify-center items-center md:justify-start">
              <img src={rogueText} className="w-auto max-w-64 h-auto" alt="rogue-text" data-aos="fade-up" />
            </div>


            <div className="w-full flex justify-center items-center sm:hidden">
              <h1 className="w-full text-center text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.10em] text-neutral-800">
                ROUGE  MAKEOVERS
              </h1>
            </div>


            <p className="w-full sm:text-left text-center text-2xl font-lora font-medium md:text-4xl leading-[2rem] md:leading-[3rem] text-[#2D2D2D]" data-aos="fade-up" data-aos-delay="1000">
              by <span className="text-[#D7A644] font-semibold font-mont">Sunita</span> is one of Mumbai’s preferred bridal
              makeup artist crafting timeless looks for elite weddings and destination celebrations.
            </p>
          </section>

          {/* Bottom Contact Bar */}
          <div className="w-full bg-[#3A3A3A] rounded-md flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 py-4 px-4">

            {/* CALL SECTION */}
            <div className="flex items-center gap-3 w-full md:w-96 justify-center md:justify-start" data-aos="fade-up">
              <img className="w-10 h-10 sm:w-12 sm:h-12" src={call} alt="phone-icon" />
              <p className="font-mont text-[#D7A644] text-xl sm:text-2xl font-semibold whitespace-nowrap">
                +91 93247 08781
              </p>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block h-12 w-[5px] bg-[#D7A644]"></div>

            {/* DESCRIPTION TEXT */}
            <p className="font-mont text-white text-lg sm:text-xl md:text-2xl leading-normal sm:leading-snug text-center md:text-left px-2" data-aos="fade-up">
              Now partnering with selected wedding planners & luxury venues for
              this season’s bridal collaborations.
            </p>

          </div>

        </div>


      </section>

      {/* Second Section */}
      <section className="w-full flex flex-col justify-center items-center mt-10" data-aos="fade-up">
        <div
          className="w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="max-w-[1100px] relative px-2">
            <img src={secondImage} className="w-full h-auto object-cover rounded-md" alt="title-image" data-aos="zoom-in" />
          </div>
        </div>
      </section>


      {/* Portfolio Preview */}
      <RecentWork />
    </div>
  );
};

export default Index;




