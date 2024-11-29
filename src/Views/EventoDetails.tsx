
    import  "../style/EventosDetails.css"
    import { useLocation } from 'react-router-dom';
    import ButtonBackPage from "@/components/ButtonBackPage";


    import {
      FacebookShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      WhatsappShareButton,
    } from "react-share";

    import {
      FacebookIcon,
      LinkedinIcon,
      WhatsappIcon,
      XIcon,
    } from "react-share";


    const EventoDetails = ( ) => {
    
      const location = useLocation()
      const data = location.state || {}
      const evento = data.event

      if (!evento) {
        return <p>Evento não encontrado.</p>;
      }


        const encodedAddress = encodeURIComponent(evento.endereco);
        //const pageUrl = window.location.href;
        const pageUrl = 'https://www.npmjs.com/package/react-share-social'

      return (
        <div>
        
              <div className='eventos-Details-container'>
              <ButtonBackPage/>
                  <div className="eventos-Details-box">
                      <div className="eventos-Details-box-text" >
                          <p className="eventos-Details-box-text-content">
                              <p className="text-content-title"><strong>{evento.nome}</strong></p><br/>
                              <p className="text-content-paragraph">
                                  Lorem ipsum dolor sit ame t, consectetur adipiscing elit. Donec tellus purus, semper a tristique eget, dignissim vitae justo.
                                  Curabitur dignissim lacus augue, sed feugiat est fringilla ac. Donec libero nulla, maximus ac ipsum hendrerit, aliquam viverra risus.
                                  Aenean vitae molestie nisi. Cras blandit tortor id massa dignissim, quis aliquam justo scelerisque. Praesent id mi ut justo tempus ullamcorper quis et tellus. 
                                  Vivamus a sapien arcu. Curabitur libero nibh, cursus dictum nunc sit amet, scelerisque pretium odio. Nullam convallis dolor nisi, vel accumsan felis tincidunt volutpat.
                              </p>


                              <p className="text-content-footer">
                                  <div className="text-content-footer-details">
                                      <p><strong>Mes:</strong> {evento.mes}</p>
                                      <p><strong>Dia:</strong> {evento.dia}</p>
                                      <p><strong>Início:</strong> {evento.inicio}</p>
                                      <p><strong>Encerramento:</strong> {evento.enceramento}</p>
                                  </div>
                                  <div className="text-content-box-img">
                                      <img src={evento.img} alt={''}></img>
                                  </div>
                              </p>


                          </p>
                      </div>

                        <div className="">
                            <div className="eventos-Details-container-map">
                                  <iframe
                                          src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                                          width="600"
                                          height="450"
                                          style={{ border: 1 }}
              
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"
                                          className="eventos-Details-map"
                                    ></iframe>
                            </div>

                              <div className="eventos-Details-share-box">
                                  <h3>Compartilhe</h3>
                                  <div className="eventos-Details-share-icons">
                                    <FacebookShareButton url={pageUrl}>
                                       <FacebookIcon size={32} round={true}/>
                                    </FacebookShareButton>
                                    < WhatsappShareButton url={pageUrl}>
                                       <WhatsappIcon size={32} round={true}/>
                                    </ WhatsappShareButton>
                                    < LinkedinShareButton url={pageUrl}>
                                       <LinkedinIcon size={32} round={true}/>
                                    </ LinkedinShareButton>
                                    < TwitterShareButton url={pageUrl}>
                                       <XIcon size={32} round={true}/>
                                    </ TwitterShareButton>
                                    
                                  </div>
                              </div>
                      </div> 
                  </div>
              </div>
        </div>
      )
    }

    export default EventoDetails