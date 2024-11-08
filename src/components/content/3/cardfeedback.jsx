import { Avatar, colors } from "@mui/material";
import { FeedbackMean } from "./cardfeedbackhelper";

const FeedbackCard = ({id, star, title, description, avatar, name, country}) => {
    return ( 
        <div className="feedback-card" key={id}>
            <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <div className="feedback-card-title">
                <h3>{title}</h3>
            </div>
            <div className="feedback-card-subtitle">
                <p>{description}</p>
            </div>
            <div className="user-feedback">
                <img src={avatar} alt="" />
                <div className="user-feedback-info">
                    <div className="user-feedback-title">
                        <p>{name}</p>
                    </div>
                    <div className="user-feedback-subtitle">
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FeedbackCard;