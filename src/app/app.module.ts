import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// componentes
import { PentientesComponent } from '../pages/pendientes/pentientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetalleComponent } from '../pages/detalle/detalle.component';

// servicios
import { ListaDeseoService } from '../app/services/lista-deseos.services';

// pipe
import { PlaceholderPipe } from '../app/pipe/placeholder.pipe';
import { PendientesPipe } from '../app/pipe/pentientes.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PentientesComponent,
    TerminadosComponent,
    AgregarComponent,
    PlaceholderPipe,
    DetalleComponent,
    PendientesPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PentientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListaDeseoService
  ]
})
export class AppModule { }
