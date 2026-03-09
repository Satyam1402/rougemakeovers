import PrimaryLink from '../ui/primaryLink';

const Resources = () => {
  const resources = [
    {
      title: 'Pre-Bridal Guide',
      description: 'Comprehensive checklist plus pre-wedding skincare routine and beauty tips.'
    },
    {
      title: 'Service Agreement',
      description: 'Transparent details of services, terms, payment schedule and cancellation.'
    },
    {
      title: 'Lookbook 2024',
      description: 'Browse latest collection of our highlights, styles and bridal transformation styles.'
    },
    {
      title: 'FAQ Sheet',
      description: 'Answering common questions about our FAQ, booking process and beauty policies.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 py-10 sm:py-20">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col justify-center items-center px-2">

        {/* Header */}
        <div className="text-center mb-18 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-primary italic">Resources</span>
          </h2>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 
                 flex flex-col h-full
                 transition-all duration-300 hover:bg-gray-800/60 
                 hover:-translate-y-1 hover:shadow-xl 
                 border border-gray-600/30"
            >
              {/* Title */}
              <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {resource.description}
              </p>

              {/* Button – fixed at bottom */}
              <div className="mt-auto">
                <PrimaryLink
                  label="Book Now"
                  path="#appointment"
                  className="text-base w-full"
                />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Resources;
