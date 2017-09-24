import { Component } from '@angular/core';


import { PentientesComponent } from '../pendientes/pentientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // Aqui es donde se maneja el router de las tabs

  tab1Root = PentientesComponent;
  tab2Root = TerminadosComponent;

  constructor() {

  }
}
