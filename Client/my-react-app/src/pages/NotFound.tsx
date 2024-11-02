import Lottie from "lottie-react";
import pageNotFound from '.././lotties/pageNotFound.json'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <Lottie animationData={pageNotFound} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default NotFound;

/*    <div style={{ width: '150px', height: '150px' }}> 
<Lottie 
animationData={pageNotFound} 
style={{ width: '100%', height: '100%' }} // Ensure Lottie takes full container size
/>
</div> */