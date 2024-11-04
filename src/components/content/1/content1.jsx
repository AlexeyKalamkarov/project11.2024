import '../../content/style.css'
import ContentCity from '../../../Images/Content/content1.png';
import IconBottom1 from '../../../Images/Content/IconBottom1.svg';
import IconBottom2 from '../../../Images/Content/IconBottom2.svg';
import IconBottom3 from '../../../Images/Content/IconBottom3.svg';
import IconBottom4 from '../../../Images/Content/IconBottom4.svg';
import Arrow from '../../../Images/Content/Arrow.svg';

const Content1 = () => {
    return ( 
        <section className="section1">
            <div className="content-top">
                <div className="left-content">
                    <div className="left-content-title">
                        <h1>Discover Your Dream Property with Estatein</h1>
                        <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </div>
                    <div className="left-content-button">
                        {/* <button></button> */}
                        <button className="button-learn">Learn More</button>
                        <button className="button-browse">Browse Properties</button>
                    </div>
                    <div className="left-content-subcard">
                        <div className="subcard">
                            <h2>200+</h2>
                            <p>Happy Customers</p>
                        </div>
                        <div className="subcard">
                            <h2>10k+</h2>
                            <p>Properties For Clients</p>
                        </div>
                        <div className="subcard">
                            <h2>16+</h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="right-content">  
                    <img src={ContentCity} alt="" />
                </div>
            </div>
            <div className="content-bottom">
                <div className="content-buttom-cards">
                    <div className="buttom-card">
                        <div className="buttom-card-div1"><img src={Arrow} alt="" /></div>
                        <div className="buttom-card-div2"><img src={IconBottom1} alt="" /></div>
                        <div className="buttom-card-div3">Find Your Dream Home</div>
                    </div>
                    <div className="buttom-card">
                        <div className="buttom-card-div1"><img src={Arrow} alt="" /></div>
                        <div className="buttom-card-div2"><img src={IconBottom2} alt="" /></div>
                        <div className="buttom-card-div3">Find Your Dream Home</div>
                    </div>
                    <div className="buttom-card">
                        <div className="buttom-card-div1"><img src={Arrow} alt="" /></div>
                        <div className="buttom-card-div2"><img src={IconBottom3} alt="" /></div>
                        <div className="buttom-card-div3">Find Your Dream Home</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Content1;