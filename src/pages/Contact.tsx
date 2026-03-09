import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Mumbai, India",
      subdetails: "Available for destination weddings worldwide"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91-93247 08781",
      subdetails: "WhatsApp available"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@rougemakeovers.com",
      subdetails: "We'll respond within 24 hours"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      details: "@rouge_makeovers",
      link: "https://www.instagram.com/rouge_makeovers?igsh=Nnpybnl3NjlxM256",
      subdetails: "See our latest work"
    }
  ];

  const hours = [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 8:00 PM" },
    { day: "Sunday", time: "By Appointment Only" },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your vision and create the perfect look for your special day
            </p>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center items-center px-2">
        <div className="w-full flex flex-col justify-center items-center max-w-[1100px]">
          {/* Contact Info Cards */}
          <section className="py-16">
            {/* Contact Form and Business Hours */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2" data-aos="fade-up">
                <Card
                  className="border-2 shadow-md rounded-lg"
                >
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-playfair font-bold mb-6">Send Us a Message</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>


              {/* Business Hours */}
              <div className="space-y-6" data-aos="fade-up">
                <Card className="border-2 shadow-md rounded-lg">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                      <Clock className="w-6 h-6" />
                      <h3 className="text-xl font-playfair font-bold">Business Hours</h3>
                    </div>
                    <div className="space-y-4">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-start pb-4 border-b border-border last:border-0">
                          <span className="text-base font-medium">{schedule.day}</span>
                          <span className="text-sm text-muted-foreground text-right">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-soft bg-gradient-primary text-white">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-xl font-playfair font-bold">Quick Response</h3>
                    <p className="text-base opacity-90">
                      Need an urgent consultation? Call or WhatsApp us directly for immediate assistance. We understand wedding planning can be time-sensitive!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Map Placeholder */}
          {/* <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-playfair font-bold mb-4">Visit Our Studio</h2>
            <p className="text-muted-foreground mb-8">
              Located in the heart of the city with easy access to all major areas
            </p>
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps?q=19.0760,72.8777&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section> */}


          {/* Contact Info Cards */}
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-2 shadow-sm  hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03]
                transition-all duration-300 rounded-2xl bg-white"
                  data-aos="fade-up"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center text-primary">{info.icon}</div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    {info.link ? (
                      <Link
                        to={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-gold transition-colors block"
                      >
                        {info.details}
                      </Link>
                    ) : (
                      <p className="text-foreground">{info.details}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.subdetails}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
