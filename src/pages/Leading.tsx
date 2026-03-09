import Hero from "@/components/marketing/Hero"
import Packages from "@/components/marketing/Packages"
import About from "@/components/marketing/About"
import Services from "@/components/marketing/Services"
import Testimonials from "@/components/marketing/Testimonials"
import FAQ from "@/components/marketing/FAQ"
import ContactCTA from "@/components/marketing/ContactCTA"
import useHashScroll from "@/hooks/useHashScroll"
import RecentWork from "@/components/RecentWork"

const Leading = () => {
    useHashScroll()

    return (
        <div className="min-h-screen mt-[65px] md:mt-[78px]">
            <Hero />
            <Services />
            <About />
            <Packages />
            <Testimonials />
            <FAQ />
            {/* <Resources /> */}
            <ContactCTA />
            {/* Contact Us form */}
            <RecentWork />
        </div>
    )
}

export default Leading