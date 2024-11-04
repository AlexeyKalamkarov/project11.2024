import MediaCard from "./card";
import '../../content/style.css'

const Content2 = () => {
    return ( 
        <div className="section2">
            <div className="section2-title">
                <h1>Featured Properties</h1>
                <div className="section2-title-btn">                
                    <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                    <button>View All Properties</button>
                </div>
            </div>
            <div className="section2-cards">
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
            </div>
        </div>
     );
}
 
export default Content2;