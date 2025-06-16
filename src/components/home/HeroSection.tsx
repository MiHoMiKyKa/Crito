import showcaseImg from "../../assets/images/showcase-image.svg";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import backgroundLines from "../../assets/images/background-lines.svg";



const HeroSection = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>We Provide The Best Business Solutions</h1>
                        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn primary">Get Consulting</Link>
                            <Link to="/services" className="btn outline">Learn More</Link>
                    </div>
                    </div>
                    <div className="hero-image">
                        <img src={showcaseImg} alt="Business consultant" />
                    </div>     
                </div>                    
            </div>
            <img className="background-lines" src={backgroundLines} alt="background lines" />
        </section>
    );
};

export default HeroSection;