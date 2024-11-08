import Content1 from "../components/content/1/content1";
import Content2 from "../components/content/2/content2";
import '../../src/style.css'
import ContentFeetback from "../components/content/3/content3";
const Home = () => {
    return ( 
        <div className="home">
            <Content1/>
            <Content2/>
            <ContentFeetback/>
        </div>
     );
}
 
export default Home;