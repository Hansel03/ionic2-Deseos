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

// servicios
import { ListaDeseoService } from '../app/services/lista-deseos.services';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PentientesComponent,
    TerminadosComponent
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
    TerminadosComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListaDeseoService
  ]
})
export class AppModule { }
