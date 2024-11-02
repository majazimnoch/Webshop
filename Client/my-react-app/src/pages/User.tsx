import Lottie from "lottie-react";
import userCandyEater from '.././lotties/userCandyEater.json'

const User = () => {
    return (
        <div className="user-container">
            <div className="lottie-container">
                <Lottie animationData={userCandyEater} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="user-container-text">
                No purchase yet! Order something.
            </div>
        </div>
    )
}

export default User;