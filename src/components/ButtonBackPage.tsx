import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';



const ButtonBackPage = () => {

  const navigate = useNavigate();

  const handleVoltar = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/'); // Fallback para a página inicial
    }
  };

  return (
    <div style={styles.box}>
      <button style={styles.btnBack} onClick={handleVoltar}>
        Voltar <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
    </div>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "flex-start",  // Adicionado para centralizar o conteúdo
    padding: "30px 10px",
  },
  btnBack: {
    width: "180px",
    border: "2px solid white",
    borderRadius: "30px",  
    height: "40px",
    cursor: "pointer",
    fontFamily: "'Bebas Neue', sans-serif",  
    fontSize: "23px",
    color: "white",
    backgroundColor: "black",
    display: "flex",  // Adicionado para melhorar o alinhamento do texto e ícone
    justifyContent: "center",  // Centraliza o conteúdo horizontalmente
    alignItems: "center",  // Alinha o ícone e o texto verticalmente
    gap: "10px",  // Espaçamento entre o texto e o ícone
  }
};

export default ButtonBackPage;