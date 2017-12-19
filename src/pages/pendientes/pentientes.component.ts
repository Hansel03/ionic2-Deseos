import { Component, OnInit } from '@angular/core';
import { ListaDeseoService } from '../../app/services/lista-deseos.services';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

// importamos el elemento para la navegacion
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-pentientes',
    templateUrl: 'pentientes.component.html'
})

export class PentientesComponent implements OnInit {

    constructor(
        private _listaDeseo: ListaDeseoService,
        private navCtrl: NavController) { }

    ngOnInit() { }

    /**
     * Funcion qu redirecciona a la pantalla de agregar
     * 
     * @memberof PentientesComponent.irAgregar
     */
    irAgregar() {
        // aqui indicamos hacia donde queremos redirigir
        // debemos importar el componente destino
        this.navCtrl.push(AgregarComponent)
    }

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