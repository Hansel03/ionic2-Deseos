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
    actualizar(item) {
        item.completado = !item.completado;

        this._listaDeseos.actualizarData();
    }

    borrarItem() {
        let confirm = this.alertCtrl.create({
            title: 'Borrar Lista',
            message: '¿Está seguro que desea eliminar esta lista?',
            buttons: [
                {
                    text: 'NO',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

}