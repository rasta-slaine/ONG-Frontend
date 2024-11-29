import Card from './Card.js'
import evt from '../assets/eventos.js'

import  "../style/EventoSection.css"
import { Link } from "react-router-dom"

 type Props = {}
 
 const Eventos = (props: Props) => {
   return (
     <div className='evento-section-container'>
        <h1>Confira Os Nossos Eventos</h1>

        <div className='evento-section'>
                {
                    evt.map((i)=>(

                      <Link  to={`/eventos/${i.id}`} 
                          className="custom-link" 
                          state={{event:i}} 
                          key={i.id} 
                        >
                        <Card key={i.id}
                        img={i.img}
                        mes={i.mes}
                        dia={i.dia}
                        inicio={i.inicio}
                        enceramento={i.enceramento}
                        local={i.local}
                        endereco={i.endereco}
                        descricao={i.descricao}
                        nome={i.nome}
                        /> 
                      </Link>

                    ))
                }
        </div>

     </div>
   )
 }
 
 export default Eventos