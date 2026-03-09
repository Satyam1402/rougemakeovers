import { Check } from 'lucide-react';
import Enquiry from './Enquiry';

const ContactCTA = () => {

  const benefits = [
    'Exclusive consultation or upscale bridal event',
    'Customized looks tailored to your skin tone',
    'Hassle-free booking and transparent pricing',
    'Available for destination weddings worldwide'
  ];


  return (
    <section className="w-full flex justify-center items-center bg-gradient-to-br from-amber-50 to-orange-50 py-10 sm:py-20">
      <div className="w-full max-w-[1100px] flex justify-center items-center px-2">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mx-auto">

          {/* Left Content */}
          <div className="w-full space-y-6 sm:space-y-10">
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-10">
              Lock-in your Date with us<br />
              and <span className="text-primary italic">Unlock your radiance</span>
            </h2>

            <ul className="w-full space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form Card */}
          <div className="w-full md:max-w-md md:mx-auto">
            <Enquiry title="Enquire Now" btnTitle="Call Back" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
