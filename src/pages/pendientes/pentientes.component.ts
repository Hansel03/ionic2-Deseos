import { Component, OnInit } from '@angular/core';
import { ListaDeseoService } from '../../app/services/lista-deseos.services';
import { AgregarComponent } from '../agregar/agregar.component';

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


    irAgregar() {
        // aqui indicamos hacia donde queremos redirigir
        // debemos importar el componente destino
        this.navCtrl.push(AgregarComponent)
    }
}