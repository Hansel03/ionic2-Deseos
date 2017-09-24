
import { ListaItem } from './lista-items';

export class Lista {
    nombre: string;
    terminado: boolean;
    items: ListaItem[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.terminado = false;
    }

}