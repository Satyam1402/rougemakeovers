import { Check } from 'lucide-react';
import PrimaryLink from '../ui/primaryLink';
import destinationImage from "@/assets/destination-wedding.jpg";
import luxuryBridal from "@/assets/service/Luxury Bridal Makeup.jpg";
import engagement from "@/assets/service/Engagement _ Sangeet_ Haldi.jpg";

const Packages = () => {

  const services = [
    {
      name: "LUXURY BRIDAL MAKEUP (MAIN EVENT)",
      image: luxuryBridal,
      description:
        "Flawless high-definition bridal makeup with premium products and timeless elegance.",
      features: [
        "HD Bridal Makeup",
        "Premium Lashes",
        "Long-Lasting Finish",
        "Mini Touch-Up Kit"
      ],
      popular: true
    },
    {
      name: "ENGAGEMENT, SANGEET, MEHENDI, HALDI, WEDDING, RECEPTION LOOK",
      image: engagement,
      description:
        "Customized makeup looks perfectly styled for every wedding celebration.",
      features: [
        "Event-Specific Makeup",
        "Outfit & Jewelry Matching",
        "Hairstyling Included",
        "Long-Wear Products"
      ],
      popular: false
    },
    {
      name: "DESTINATION BRIDAL PACKAGE",
      image: destinationImage,
      description:
        "Complete bridal makeup services for stress-free destination weddings.",
      features: [
        "Multiple Event Coverage",
        "On-Location Bridal Support",
        "Travel-Friendly Setup",
        "Emergency Touch-Ups"
      ],
      popular: true
    },
    {
      name: "PRE-WEDDING LOOKS",
      image: destinationImage,
      description:
        "Fresh, natural makeup looks perfect for pre-wedding shoots.",
      features: [
        "Minimal & Dewy Finish",
        "Daylight Friendly Makeup",
        "Photo-Ready Look",
        "Comfortable Wear"
      ],
      popular: false
    },
    {
      name: "BRIDAL TRIAL, CONSULTATION SESSION",
      image: destinationImage,
      description:
        "Personalized trial session to finalize your perfect bridal look.",
      features: [
        "Skin & Tone Analysis",
        "Product Compatibility Check",
        "Look Finalization",
        "One-on-One Consultation"
      ],
      popular: false
    }
  ];


  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-10 md:py-20 px-2 flex justify-center items-center">
      <div className="w-full max-w-[1100px] flex flex-col justify-center items-center">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive <span className="text-primary italic">Bridal Packages</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package tailored to your wedding needs. All packages include premium services
            and a touch-up kit.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 xl:gap-6">
          {services?.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl py-6 px-4 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        ${pkg.popular
                  ? 'bg-[#1F2937] text-white shadow-2xl'
                  : 'bg-white text-gray-900 shadow-md'
                }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-base font-bold mb-3">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className={`text-base mb-6 leading-relaxed ${pkg.popular ? 'text-white/90' : 'text-gray-600'
                }`}>
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check
                      size={18}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5 text-primary"
                    />
                    <span className={`text-sm ${pkg.popular ? 'text-white/95' : 'text-gray-700'
                      }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button – always at bottom */}
              <div className="mt-auto">
                <PrimaryLink label="Book Now" path="#appointment" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
