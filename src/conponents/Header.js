import "./styles/Header.css";
import logo from "./assets/group.png";

function Header() {
    return <div className="divHeader">
        <nav className="navHeader">
            <div className="divTitle">
                <h1 className="titleNav">K<img src={logo} alt="logo de Kasa" className="logoKasa"/>sa</h1>
            </div>
            <div className="divNav">
                <p className="home">Accueil</p>
                <p className="about">A Propos</p>
            </div>
        </nav>
    </div>
}

export default Header;