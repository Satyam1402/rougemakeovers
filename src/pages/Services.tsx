import bg from "@/assets/service/bg.png";
import text from "@/assets/service/text.png";
import image1 from "@/assets/service/1.jpg";
import image2 from "@/assets/service/2.jpg";
import image3 from "@/assets/service/3.jpg";
import ServiceList from "@/components/ServiceList";
import Appointment from "@/components/Appointment";

const Services = () => {

  return (
    <div className="min-h-screen">
      <section
        className="mt-[65px] md:mt-[75px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
        data-aos="fade-up"
      >
        <div className="w-full sm:py-20 py-10 px-4 flex justify-center items-center">
          <div className="w-full max-w-[1230px] flex flex-col justify-center items-center gap-8 sm:gap-16">
            <div className="w-full flex justify-start items-center">
              <img src={text} alt="text-image" />
            </div>
            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
              <img
                src={image1}
                alt="Bridal look 1"
                className="w-full object-cover rounded-xl shadow-md"
              />
              <img
                src={image2}
                alt="Bridal look 2"
                className="w-full object-cover rounded-xl shadow-md"
              />
              <img
                src={image3}
                alt="Bridal look 3"
                className="w-full object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Services List */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[1100px] flex justify-center items-center">
                <ServiceList />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="appointment" className="w-full flex justify-center items-center py-20">
        <div className="w-full container max-w-[1110px] px-2">
          <Appointment />
        </div>
      </section>
    </div>
  );
};

export default Services;
