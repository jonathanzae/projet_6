import "./styles/Footer.css";
import kF from "./assets/kF.png";
import logo from "./assets/logoF.png";
import sF from "./assets/sF.png";
import aF from "./assets/aF.png";

function Footer() {
    return <div className="divFooter">
        <div className="divLogoFooter">
            <span className="spanLogo">
                <img src={kF} alt="Logo Kasa du Footer" className="logoFooter"/>  
                <img src={logo} alt="Logo Kasa du Footer" className="logoFooter"/>
                <img src={sF} alt="Logo Kasa du Footer" className="logoFooter"/>
                <img src={aF} alt="Logo Kasa du Footer" className="logoFooter"/>
            </span>
        </div>
        <div className="divLegalNotice"><p className="legalNotice">© 2020 Kasa. All rights reserved</p></div>
    </div>
}

export default Footer;