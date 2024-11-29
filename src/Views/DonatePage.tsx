
import  "../style/DonatePage.css"




const DonatePage = () => {

    const pix1 = 'BiomedicinaAcaosocial@gmail.com'

    const HandleCopyText = (text:string)=>{
        try {
            window.navigator.clipboard.writeText(text);
            alert("Copiado para a área de transferência!");
        } catch (error) {
            console.error("Não foi possível copiar para a área de transferência.", error);
            alert("Falha ao copiar.");
        }
        }
      



  return (
<div className="donate-page-container donate-page-header">
      <div className="donate-page-ImageCover">
      </div>
            <h3>Ajude a Transformar Vidas</h3>
      <div className="donate-page-content">
        <p>
          Sua doação faz toda a diferença! Contribua para nossos projetos e nos
          ajude a levar esperança e oportunidades para quem mais precisa.
          Juntos, podemos mudar o mundo.
        </p>
      </div>
      <div  className="donate-page-content-main">
        <section className="">
            <h3>Pix</h3>
            <h4>  Chave pix : ) </h4>
            <div><p>{pix1}</p><button onClick={()=>HandleCopyText(pix1)}>Copiar</button></div> 
            <img src="/images/google_qr_code.png"/>
        </section>


      </div>
      <div className="donate-page-footer">
        <p className="footer-text">Obrigado por sua generosidade! 💙</p>
      </div>
    </div>
  )
}

export default DonatePage

/*<img
src="/images/background-donate.jpg"
alt="Doação"
className="donate-page-ImageCover"
/>

*/