import { Evento } from "./evento.interface";

export interface Carrito {
  items : Evento[];
  cantidad : number;
  montoTotal : number;
}
