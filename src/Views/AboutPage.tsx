
import  "../style/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const AboutPage = () => {

  
  const CreatorImage = '/avatar.png';

  return (
    <div className="page">
      <div className='modal'>
        <div className="modal_section_1">
          <h3>Biomedicina Ação Social</h3>
        </div>
        <div className="modal_section_2">

          <p>
          The UN’s Membership has grown from the original 51 Member States in 1945 to the current 193 Member States.
          All UN Member States are members of the General Assembly.  States are admitted to membership by a decision
          of the General Assembly upon the recommendation of the Security Council.
          </p>
        </div> 
      </div>

      <div className="modal_creator">
         <img src={CreatorImage} alt="" />
         <h2>Secretario-Geral</h2>

         <p className="frase">
         <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#333" />
          In the end, it comes down to values [...] We want the world our 
          children inherit to be defined by the values enshrined in the UN Charter:
          peace, justice, respect, human rights, tolerance and solidarity.
         </p>
         
         <p className="frase_author"> - Antonio guerra <br/> Biomedicina Ação Social </p>

         <span className="modal_separation"></span>  

         <div className="texto">
            <p className="texto_Pa">
              The 1 Secretary-General is Chief Administrative Officer of the UN – and
              is also a symbol of the Organization's ideals and an advocate for all the world's 
              peoples, especially the poor and vulnerable.
            </p>
            <p className="texto_Pa">
              The 2 Secretary-General is Chief Administrative Officer of the UN – and
              is also a symbol of the Organization's ideals and an advocate for all the world's 
              peoples, especially the poor and vulnerable.
            </p>
            <p className="texto_Pa">
              The 3 Secretary-General is Chief Administrative Officer of the UN – and
              is also a symbol of the Organization's ideals and an advocate for all the world's 
              peoples, especially the poor and vulnerable.
            </p>
         </div>

         <div className="modal-share">
                       <FontAwesomeIcon icon={faFacebook} size="2x" color="#454545" className="icon"/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#454545"  className="icon"/>
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#454545"  className="icon"/>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#454545"  className="icon"/>
         </div>
      </div>


    </div>
  )
}

export default AboutPage