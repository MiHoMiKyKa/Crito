import "./Header.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logos/logotype.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className="header">
            <div className="container header-top">
                <div className="left">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="Crito-logotyp" className="logo " />                       
                    </Link>  
                    <button className="menu-bars" onClick={toogleMenu} aria-label="Toggle menu"> <FontAwesomeIcon icon={faBars} /></button> 
                </div>

                <div className="middle contact-info">
                    <span><FontAwesomeIcon icon={faPhone} /> +46 (8) 121 470 50</span>
                    <span><FontAwesomeIcon icon={faEnvelope} /> info@crito.com</span>  
                    <span><FontAwesomeIcon icon={faLocationDot} /> Sveavägen 31, 111 34 STOCKHOLM</span>
                </div>

                <div className="right social-icons">
                    <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://x.com" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="https//instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https//linkedin.com" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>                   
                </div>
            </div>    
            <div className="container header-bottom">
                <nav className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nave-link active" : "nav-link"}>Home</NavLink>     
                    <NavLink to="services" className={({ isActive }) => isActive ? "nave-link active" : "nav-link"}>Service</NavLink>
                    <NavLink to="news" className={({ isActive }) => isActive ? "nave-link active" : "nav-link"}>News</NavLink>
                    <NavLink to="contact" className={({ isActive }) => isActive ? "nave-link active" : "nav-link"}>Contact</NavLink>
                </nav>
                    <Link to="/login" className="btn login-btn">Login <span className="arrow">↗</span></Link>
            </div>                
        </header>
    );
};

export default Header;

