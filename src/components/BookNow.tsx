import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface BookNowProps {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookNow = ({ open, onOpenChange }: BookNowProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl w-full rounded-xl">

                {/* Scroll container with hidden scrollbar */}
                <div className="max-h-[90vh] overflow-y-auto scrollbar-hide">

                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center">
                            Book Your Appointment
                        </DialogTitle>
                        <DialogDescription className="text-center">
                            Fill in your details and we will contact you shortly.
                        </DialogDescription>
                    </DialogHeader>

                    {/* FORM */}
                    <div className="mt-8">
                        <ContactForm onOpenChange={onOpenChange} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookNow;
