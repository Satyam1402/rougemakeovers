import ContactForm from './ContactForm'

const Appointment = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <div className="w-full">
                <h1 className="w-full text-4xl md:text-5xl font-playfair font-bold mb-3 text-primary text-center">
                    Book Your Appointment
                </h1>
                <p className="w-full text-center text-muted-foreground max-w-2xl mx-auto text-lg">
                    Fill in your details and we will contact you shortly.
                </p>
            </div>
            <ContactForm />
        </div>
    )
}

export default Appointment