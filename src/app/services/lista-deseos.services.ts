import { Injectable } from '@angular/core';
// importamos las clases
import { Lista } from '../clases/listas';


@Injectable()
export class ListaDeseoService {

    listas: Lista[] = [];

    constructor() {

        // let Lista1 = new Lista('Compras de supermercado');
        // let Lista2 = new Lista('Juegos que deseo');
        // let Lista3 = new Lista('Cosas de la universidad');


        // this.listas.push(Lista1);
        // this.listas.push(Lista2);
        // this.listas.push(Lista3);

        // console.log('Servicio inicializado')

        this.cargarData();
    }
    /**
     * Funcion para guardar las listas en localStorage
     * 
     * @memberof ListaDeseoService.actualizarData
     */
    actualizarData() {
        //guardar en local storage
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    /**
     * Funcion para cargar las listas desde localStorage
     * 
     * @memberof ListaDeseoService.cargarData
     */
    cargarData() {
        //obtener la data de local storage

        this.listas = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
    }

    /**
     * Funcion para agregar la lista al array de listas del home
     * 
     * @param {Lista} lista 
     * @memberof ListaDeseoService.agregarLista
     */
    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.actualizarData();
    }

    /**
     * Funcion que elimina la lista de nuestro arreglo
     * recibiendo como parametro en index, de la posicion a eliminar
     * @param {number} idx 
     * @memberof ListaDeseoService.eliminarLista
     */
    eliminarLista(idx: number) {
        this.listas.splice(idx, 1);
        this.actualizarData();
    }


}