import "./styles/Header.css";
import k from "./assets/k.png";
import logo from "./assets/logo.png";
import s from "./assets/s.png";
import a from "./assets/a.png";

function Header() {
    return <div className="divHeader">
        <nav className="navHeader">
            <div className="divTitle">
                <h1 className="titleNav">
                <img src={k} alt="" className="kLogo" />
                <img src={logo} alt="logo de Kasa" className="logoKasa"/>
                <img src={s} alt="" className="sLogo"/>
                <img src={a} alt="" className="aLogo"/>
                </h1>
            </div>
            <div className="divNav">
                <p className="home">Accueil</p>
                <p className="about">A Propos</p>
            </div>
        </nav>
    </div>
}

export default Header;