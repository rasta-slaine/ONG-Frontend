import { Link } from "react-router-dom";
import "../style/Header.css";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";



const Header = () => {
  //const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoImage = "/logo_ong.webp";

  /*
  const HandleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  }; */

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); // Alterna o estado de menuOpen
    console.log(menuOpen)
   
  };

  return (
    <div className="header_Main">
      <div className="menu_section_1">
        <img src={logoImage} className="img" alt="Logo ONG" />
        <h3>Biomedicina Ação Social</h3>
        {/* Botão de menu hambúrguer */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? 'X' : '☰' }
        </button>
      </div>

      {/* Menu principal */}
      <div className={`menu_section_2 ${menuOpen ? "menu_open" : ""}`}>
        <Link to={"/"} className="header_Main_Link">
          Home
        </Link>
        <Link to={"/Blog"} className="header_Main_Link">
          Blog
        </Link>
        <Link to={"/eventos"} className="header_Main_Link">
          Eventos
        </Link>
        <Link to={"/doar"} className="header_Main_Link">
          Doar
        </Link>
        <Link to={"/sobre"} className="header_Main_Link">
          Sobre
        </Link>
        <Link to={"/contato"} className="header_Main_Link">
          Contato
        </Link>

        {
          //<button onClick={HandleLogOut} className="header_Main_Link">Log out</button>
        }
      </div>
    </div>
  );
};

export default Header;