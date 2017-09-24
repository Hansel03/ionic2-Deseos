import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

    titulo: string;
    item: string;

    items: ListaItem[] = [];

    constructor() { }

    ngOnInit() { }


    /**
     * Funcion que agrega los items al array
     * 
     * @returns 
     * @memberof AgregarComponent.agregar
     */
    agregar() {
        if (this.item === '' || this.item === undefined) {
            return;
        }


        let item = new ListaItem();
        item.nombre = this.item;

        this.items.push(item);
        this.item = '';
    }
    /**
     * Eliminar un item de la lista
     * 
     * @param {number} id 
     * @memberof AgregarComponent.eliminar
     */
    eliminar(id: number) {
        console.log(id);
        this.items.splice(id, 1);
    }
}