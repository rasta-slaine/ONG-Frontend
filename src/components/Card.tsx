import  "../style/Card.css"

type Props = {
    img:string,
    mes:string,
    dia:string,
    inicio:string,
    enceramento:string,
    local:string,
    endereco:string,
    nome:string,
    descricao:string
}


const Card = (props: Props) => {
  return (
    <div className="evento-card">
        <img src={props.img} alt=''/>

        <div className="evento-card-title"><span>{props.nome}</span></div>

        <div className='evento-header'>

            <div className='evento-data'>
               <p className="mes">{props.mes}</p>
               <p className="dia">{props.dia}</p>  
            </div>
            <div className='evento-descrisao'>

                <div className="row"><p>Incio :</p><span>{props.inicio}</span></div>
                <div className="row"><p>Enceramento:</p><span>{props.enceramento}</span></div>
                <div className="row"><p>Local:</p><span>{props.local}</span></div>
              {
                //<div className="row"><p>Endereço:</p><span>{props.endereco}</span></div> 
              }

            </div>
        </div>
        <div className='evento-footer'>
            <p>{props.descricao}</p>
        </div>
    </div>
  )
}

export default Card