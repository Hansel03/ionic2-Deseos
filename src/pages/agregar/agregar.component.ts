import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseoService } from '../../app/services/lista-deseos.services';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

    titulo: string = '';
    item: string = '';

    items: ListaItem[] = [];

    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _listaDeseos: ListaDeseoService
    ) { }

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

    /**
     * Funcion que se encarga de guardar la lista
     * 
     * @returns 
     * @memberof AgregarComponent.guardarLista
     */
    guardarLista() {
        if (this.titulo.length === 0) {
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario!',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let lista = new Lista(this.titulo);
        lista.items = this.items;
        /**Agregamos al servicio de listas el array de las listas */
        this._listaDeseos.listas.push(lista);
        /** Nos devolvemos a la pantalla anterior del inicio */
        this.navCtrl.pop();

    }
}