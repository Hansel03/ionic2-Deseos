import { Component, OnInit } from '@angular/core';
import { ListaDeseoService } from '../../app/services/lista-deseos.services';

@Component({
    selector: 'app-pentientes',
    templateUrl: 'pentientes.component.html'
})

export class PentientesComponent implements OnInit {

    constructor(private _listaDeseo: ListaDeseoService) { }

    ngOnInit() { }
}