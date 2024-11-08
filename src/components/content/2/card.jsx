import IconCard1 from '../../../Images/Card/Icon1cardinfo.svg';
import IconCard2 from '../../../Images/Card/Icon2cardinfo.svg';
import IconCard3 from '../../../Images/Card/Icon3cardinfo.svg';
import { CardMean } from './cardhelper';
const Card = ({id, title, description, price, img}) => {
  return ( 
    <div className="section2-slider-card" key={id}>
        <div className="section2-slider-card-img">
          <img src={img} alt="" />
        </div>
        <div className="section2-slider-card-info">
          <div className="section2-slider-card-title">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="section2-slider-card-info-icon">
            <div className="icon-card">
              <img src={IconCard1} alt="" />
              <p>4-Bedroom</p>
            </div>
            <div className="icon-card">
              <img src={IconCard2} alt="" />
              <p>3-Bathroom</p>
            </div>
            <div className="icon-card">
              <img src={IconCard3} alt="" />
              <p>Villa</p>
            </div>
          </div>
          <div className="section2-slider-card-footer">
            <div className="">
              <p>Price</p>
              <h3>{price}</h3>
            </div>
            <button>View Property Details</button>
          </div>
        </div>
    </div>
   );
}
 
export default Card;