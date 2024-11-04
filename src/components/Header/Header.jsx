import Logo from '../../Images/Header/Logo.png';
const Header = () => {
    return ( 
        <header className="header">
            <div className="container">

                <div className="div1">
                    <img src={Logo} alt="" />
                </div>
                <nav className="nav">
                    <ul>
                        <li className="li1">Home</li>
                        <li className="li2">About us</li>
                        <li className="li3">Properties</li>
                        <li className="li4">Services</li>
                    </ul>
                </nav>
                <div className="header-button">
                    <button className="btn-hdr">Contact us</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;