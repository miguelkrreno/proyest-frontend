import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudFormacionComponent } from './components/insertsComponents/solicitud-formacion/solicitud-formacion.component';
import { SolicitudViajesComponent } from './components/insertsComponents/solicitud-viajes/solicitud-viajes.component';
import { DatePipe } from '@angular/common';
import { SolicitudAprobacionGastosComponent } from './components/insertsComponents/solicitud-aprobacion-gastos/solicitud-aprobacion-gastos.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SolicitudesViewComponent } from './components/validadores/formaciones/solicitudes-view/solicitudes-view.component';
import { SolicitudesCardComponent } from './components/validadores/formaciones/solicitudes-card/solicitudes-card.component';
import { SolicitudesListComponent } from './components/validadores/solicitudes-list/solicitudes-list.component';
import { CardViajesComponent } from './components/validadores/viajes/card-viajes/card-viajes.component';
import { ViewViajesComponent } from './components/validadores/viajes/view-viajes/view-viajes.component';

import { SolicitudCompraComponent } from './components/insertsComponents/solicitud-compra/solicitud-compra.component';
import { ViewComprasComponent } from './components/validadores/compras/view-compras/view-compras.component';
import { ViewGastosComponent } from './components/validadores/gastos/view-gastos/view-gastos.component';
import { CardUserRequestComponent } from './components/home/card-user-request/card-user-request.component';
import { DetailUserRequestComponent } from './components/home/detail-user-request/detail-user-request.component';
import { C404Component } from './components/c404/c404.component';
import { UpdateAprobacionGastosComponent } from './components/updatesComponents/update-aprobacion-gastos/update-aprobacion-gastos.component';
import { UpdateCompraComponent } from './components/updatesComponents/update-compra/update-compra.component';
import { UpdateFormacionComponent } from './components/updatesComponents/update-formacion/update-formacion.component';
import { UpdateViajesComponent } from './components/updatesComponents/update-viajes/update-viajes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitudFormacionComponent,
    SolicitudViajesComponent,
    SolicitudAprobacionGastosComponent,
    HomeComponent,
    PerfilComponent,
    SolicitudesViewComponent,
    SolicitudesCardComponent,
    SolicitudesListComponent,
    CardViajesComponent,
    ViewViajesComponent,
    SolicitudCompraComponent,
    ViewComprasComponent,
    ViewGastosComponent,
    CardUserRequestComponent,
    DetailUserRequestComponent,
    C404Component,
    UpdateAprobacionGastosComponent,
    UpdateCompraComponent,
    UpdateFormacionComponent,
    UpdateViajesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
