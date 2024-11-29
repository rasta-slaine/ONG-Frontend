export type Event = {
    id: number;
    img:string,
    mes:string,
    dia:string,
    inicio:string,
    enceramento:string,
    local:string,
    endereco:string,
    descricao:string
  };
  
  export type EventoDetailsProps = {
    event: Event[];
  };