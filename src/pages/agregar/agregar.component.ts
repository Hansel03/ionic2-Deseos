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

    agregar() {
        if (this.item === '' || this.item === undefined) {
            return;
        }


        let item = new ListaItem();
        item.nombre = this.item;

        this.items.push(item);
        this.item = '';
    }
}