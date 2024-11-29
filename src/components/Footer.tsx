import  "../style/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


const Footer = () => {
    const logoImage = '/logo_ong_blackandwhite.webp';

  return (
    <div className="footer-fluid">
        <div className="footer-top">
            <div className="footer-logo">
                 <h3>Biomedicina <br/> Ação Social</h3>
                 <img src={logoImage}  className="img"/>
            </div>
            <div className="footer-main">
                <div className="footer-icons">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" className="icon"/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff"  className="icon"/>
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff"  className="icon"/>
                        <FontAwesomeIcon icon={faYoutube} size="2x" color="#fff"  className="icon"/>
                </div>
                <span className="footer-separation"></span>
                <Link to={"/doar"} > <button> DOAR </button></Link>
            </div>
        </div>
        <span className="footer-bottom"></span>
        <div>
            <div className="footer-link">
                <ul>
                     <li>CONTACT</li>
                     <li>COPYRIGHT</li>
                     <li>TERMOS DE USO</li>
                     <li>POLITICAS DE PRIVACIDADE</li>
                 </ul>
            </div>
        </div>
        {
            //<p>&copy; {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.</p>
        }
    </div>
  )
}

export default Footer