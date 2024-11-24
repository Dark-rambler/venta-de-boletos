import { Base } from "./base.interface";

export interface Evento extends Base {
    nombre: string;
    fecha: string;
    lugar: string;
    precio: number;
    imagen: string;
    boletos: number;
    categoria: string;
}
