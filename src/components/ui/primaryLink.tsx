import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

interface IProps {
    label: string
    path: string
    className?: string
}

const PrimaryLink = ({ label, path, className }: IProps) => {
    return (
        <Link
            to={path}
            className={`${className ? className : "text-lg"} group w-full
            inline-flex items-center gap-2 
            bg-primary text-white px-8 py-3 
            rounded-xl shadow-md hover:shadow-xl 
            hover:bg-[#b8965f] hover:text-black
            transition-all duration-300 justify-center
            font-semibold`}
        >
            {label}
            <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-2"
            />
        </Link>
    )
}

export default PrimaryLink
