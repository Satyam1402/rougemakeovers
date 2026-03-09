import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Cta = () => {
    return (
        <section className="py-20 bg-gradient-primary text-white">
            <div className="container mx-auto px-4 text-center" data-aos="fade-up">
                <h2 className="text-4xl font-playfair font-bold mb-6">
                    Ready to Be Our Next Beautiful Bride?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                    Let's create a stunning look that reflects your unique beauty and style
                </p>
                <Button size="lg" className="px-6 py-3 rounded-lg text-lg font-medium" variant="secondary" asChild>
                    <Link to="/contact">Book Your Consultation</Link>
                </Button>
            </div>
        </section>
    )
}

export default Cta