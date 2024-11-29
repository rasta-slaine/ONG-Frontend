
import  "../style/EventosPage.css"

import evt,{Event} from '../assets/eventos.ts'
import Card from '@/components/Card.js'
import { Link } from "react-router-dom"



const EventosPage = () => {
  return (
    <div>
        <h1 className="eventos-page-title">Veja Todos Os Nossos Eventos </h1>
        <div className='eventos-page-container'>
        {
                    evt.map((i:Event)=>(
                      <Link  to={`/eventos/${i.id}`} 
                             className="custom-link" 
                             state={{event:i}} // Passando o evento no state
                             key={i.id} // Certifique-se de usar a key aqui
                       >
                        <Card key={i.id}
                        img={i.img}
                        mes={i.mes}
                        dia={i.dia}   
                        inicio={i.inicio}
                        enceramento={i.enceramento}
                        local={i.local}
                        endereco={i.endereco}
                        nome={i.nome}
                        descricao={i.descricao}
                        /> 
                      </Link>

                    ))
                }
        </div>
    </div>
  )
}

export default EventosPage