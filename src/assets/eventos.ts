
export type Event = {
    id: number;
    img:string,
    mes:string,
    dia:string,
    inicio:string,
    enceramento:string,
    local:string,
    endereco:string,
    nome:string,
    descricao:string
  };



const evt: Event[] = [
    {
        id:1,
        img:'/images/post-1.webp',
        mes:'jan',
        dia:'16',
        inicio:'13:00',
        enceramento:'17:30',
        local:'São paulo / SP',
        endereco:'Av. Miguel Ignácio Curi, 111',
        nome:'Medicina que Salva Vidas',
        descricao:'No dia 16, vai acontecer a primeira ação do ano. vem fazer uma avaliação!'
    },
    {
        id:2,
        img:'/images/post-1.webp',
        mes:'fev',
        dia:'20',
        inicio:'13:00',
        enceramento:'17:30',
        local:'São paulo / SP',
        endereco:'Av. Miguel Ignácio Curi, 111',
        nome:'Medicina que Salva Vidas',
        descricao:'No dia 20, vai acontecer a primeira ação do ano. vem fazer uma avaliação!'
    },
    {
        id:3,
        img:'/images/post-1.webp',
        mes:'mai',
        dia:'20',
        inicio:'13:00',
        enceramento:'17:30',
        local:'São paulo / SP',
        endereco:'Rua 1',
        nome:'Medicina que Salva Vidas',
        descricao:'No dia 20, vai acontecer a primeira ação do ano. vem fazer uma avaliação!'
    }
]
export default evt 