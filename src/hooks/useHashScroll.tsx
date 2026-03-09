import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const useHashScroll = (delay: number = 100) => {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) return

        const id = location.hash.replace("#", "")
        const element = document.getElementById(id)

        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" })
            }, delay)
        }
    }, [location, delay])
}

export default useHashScroll
