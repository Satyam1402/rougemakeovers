import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Enquiry from './Enquiry';
import marketingBanner from '../../assets/marketing/banner-for-marketing.jpg';

const Hero = () => {

  const features = [
    'Luxury High-End Products',
    'Personalized Skin Prep & Consultation',
    'On-Location Services Available',
    'Bridesmaid & Family Packages',
    'Serving Mumbai & Destination Weddings'
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${marketingBanner})`
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      {/* Content Container */}
      <div className='w-full flex justify-center items-center pt-5 pb-20'>

        <div className="relative z-10 w-full flex flex-col sm:max-w-[1100px] gap-5 sm:gap-8 px-2">
          {/* Top Navigation Bar */}

          <div className="w-full flex justify-between items-center">
            {/* Breadcrumb */}
            <div className="text-white text-xs sm:text-sm">
              <span className="opacity-70">
                <Link to="/">Home</Link>
                <span className='mx-1 text-base'>›</span>
                <Link to="/">Services</Link>
                <span className='mx-1 text-base'>›</span>
              </span>
              <span className="text-primary font-medium">Bridal Makeup</span>
            </div>

            {/* Shopping Bag Icon */}
            <button className="text-white hover:text-primary transition-colors">
              <ShoppingBag size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>


          {/* Main Hero Content */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="text-white space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-loose font-playfair">
                {/* Radiate Confidence<br /> */}
                Luxury <span className="text-primary">Bridal Beauty</span>
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-xl">
                Exquisite bridal makeup artistry tailored to your unique style. Let us enhance your natural beauty for a memorable that lasts a lifetime.
              </p>

              {/* Features List */}
              <ul className="space-y-3 sm:space-y-4">
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Gold Checkmark Circle */}
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-100 text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form Card */}
            <div className="w-full lg:max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <Enquiry title="Enquire Availability" btnTitle="Call Back" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
