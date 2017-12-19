import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {

        // Capturamos los enviados enviados por parametros
        // y los obtenemos con navParams y lo pasamos a una variable
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }

    ngOnInit() { }
}