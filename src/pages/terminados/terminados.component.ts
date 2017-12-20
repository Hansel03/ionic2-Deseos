import { Component, OnInit } from '@angular/core';
import { ListaDeseoService } from '../../app/services/lista-deseos.services';
import { DetalleComponent } from '../detalle/detalle.component';
// importamos el elemento para la navegacion
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent implements OnInit {

    constructor(
        private _listaDeseo: ListaDeseoService,
        private navCtrl: NavController) { }

    ngOnInit() { }


    /**
     * 
     * Funcion que permite obtener el detalle de la lista
     * @param {String} lista 
     * @param {number} idx 
     * @memberof PentientesComponent.verDetalle
     */
    verDetalle(lista, idx) {
        // aqui indicamos hacia donde queremos redirigir
        // debemos importar el componente destino
        //con las {} indicamos que esa pantalla va a recibir parametros
        this.navCtrl.push(DetalleComponent, { lista, idx });
    }
}