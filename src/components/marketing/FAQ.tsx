import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What bridal makeup services do you offer?',
      answer: 'We offer luxury bridal makeup for all wedding events, including the main wedding day, engagement, sangeet, mehendi, haldi, reception, pre-wedding shoots, and destination weddings. Each look is customised to suit your outfit, jewellery, lighting, and event style.'
    },
    {
      question: 'What makes Rouge Makeovers different from other bridal makeup artists?',
      answer: 'Rouge Makeovers is known for timeless, elegant bridal looks that enhance your natural features rather than overpower them. Every bride receives a personalised approach, premium products, advanced techniques, and calm, professional on-site support throughout the celebration.'
    },
    {
      question: 'Do you provide destination bridal makeup services?',
      answer: 'Yes. We offer complete on-location bridal support for destination weddings, covering multiple events and last-minute touch-ups. Our destination bridal packages are designed to ensure a seamless, stress-free experience wherever your wedding takes place.'
    },
    {
      question: 'What products do you use for bridal makeup?',
      answer: 'We use only high-end, professional makeup brands known for their longevity, finish, and skin safety. Product selection is customised based on your skin type, sensitivity, and event requirements.'
    },
    {
      question: 'Do you offer makeup services for family members or bridesmaids?',
      answer: 'Yes, makeup services for family members and bridesmaids can be arranged along with bridal bookings. This can be discussed during consultation so we can plan timelines and team support accordingly.'
    },
    {
      question: 'How do I book an appointment with Rouge Makeovers?',
      answer: 'You can book your appointment by filling out the enquiry form on our website or contacting us directly via phone or email. Once we receive your details, our team will get in touch to discuss availability and next steps.'
    },
    {
      question: 'Where are you based, and do you travel within Mumbai?',
      answer: 'We are based in Mumbai and provide on-location bridal makeup services across Mumbai and nearby locations. Travel details are discussed during booking.'
    },
    {
      question: 'Can you recreate a reference look I like?',
      answer: 'We’re happy to take inspiration from reference images while adapting the look to suit your facial features, outfit, and event lighting—so it feels personal, wearable, and uniquely you.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center items-center py-10 md:py-20 px-2">
      <div className="w-full max-w-[1100px] flex flex-col justify-center items-center">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about your booking
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg sm:text-xl font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  size={20}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-5 pt-2 text-base sm:text-lg text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
