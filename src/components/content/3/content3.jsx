import SliderFeedback from "./sliderfeedback";
import '../../content/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ContentFeetback = () => {
    return ( 
        <div className="feedback">
            <div className="feedback-title">
                <h1>What Our Clients Say</h1>
                <div className="feedback-title-btn">                
                    <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    <button>View All Testimonials</button>
                </div>
            </div>
            <div className="feedback-cards">
                <SliderFeedback/>
            </div>
        </div>
     );
}
 
export default ContentFeetback;