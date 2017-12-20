import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseoService } from '../../app/services/lista-deseos.services';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: Lista;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public _listaDeseos: ListaDeseoService,
        public alertCtrl: AlertController) {

        // Capturamos los enviados enviados por parametros
        // y los obtenemos con navParams y lo pasamos a una variable
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }

    ngOnInit() { }

    /**
     * Actualizar el nombre de una lista seleccionada
     * 
     * @param {ListaItem} item 
     * @memberof DetalleComponent.actualizar
    / */
    actualizar(item: ListaItem) {
        item.completado = !item.completado;
        //variable bandera para saber si se marcaron todos los items
        let todosMarcados = true;
        //recorremos todos los items para saber cuales estan completados
        for (let item of this.lista.items) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminado = todosMarcados;

        this._listaDeseos.actualizarData();
    }


    /**
     * Funcion para borrar abrir un modal de confirmacion
     * y borrar la lista seleccionada
     * @memberof DetalleComponent.borrarItem
     */
    borrarItem() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Está seguro que desea eliminar la lista?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: () => {
                        //Metodo que elimina la lista
                        this._listaDeseos.eliminarLista(this.idx);
                        //Volvemos a la pantalla anterior
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }

}