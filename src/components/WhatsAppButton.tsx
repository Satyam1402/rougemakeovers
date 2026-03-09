import { Link } from "react-router-dom";
import whatsappLogo from "../assets/home/whatsapp-logo.svg";

const WhatsAppButton = () => {
    const phoneNumber = "+919324708781";

    return (
        <Link
            to={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed w-10 h-10 sm:w-11 sm:h-12 
                bottom-2 right-2 sm:bottom-5 sm:right-5 
                text-white rounded-full shadow-lg 
                transition-all duration-500 ease-out 
                hover:scale-110 hover:shadow-lg 
                z-50"
        >
            <img
                src={whatsappLogo}
                alt="whatsapp-logo"
                className="w-full h-full"
            />
        </Link>
    );
};

export default WhatsAppButton;
