import "./styles/Footer.css";
import logo from "./assets/vector.png";

function Footer() {
    return <div className="divFooter">
        <div className="divLogoFooter"><span className="spanLogo">K<img src={logo} alt="Logo Kasa du Footer" className="logoFooter"/>sa</span></div>
        <div className="divLegalNotice"><p className="legalNotice">© 2020 Kasa. All rights reserved</p></div>
    </div>
}

export default Footer;