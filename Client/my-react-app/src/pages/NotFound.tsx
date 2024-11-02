import Lottie from "lottie-react";
import pageNotFound from './pageNotFound.json'

const NotFound = () => {
    return (
        <div>
            <p>Page not found</p>
            <Lottie animationData={pageNotFound} />
        </div>
    )
}

export default NotFound;