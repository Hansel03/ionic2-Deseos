import { Injectable } from '@angular/core';
// importamos las clases
import { Lista } from '../clases/listas';


@Injectable()
export class ListaDeseoService {

    listas: Lista[] = [];

    constructor() {

        let Lista1 = new Lista('Compras de supermercado');
        let Lista2 = new Lista('Juegos que deseo');
        let Lista3 = new Lista('Cosas de la universidad');


        this.listas.push(Lista1);
        this.listas.push(Lista2);
        this.listas.push(Lista3);

        console.log('Servicio inicializado')
    }


}