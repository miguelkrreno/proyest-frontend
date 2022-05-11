import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SolicitudAprobacionGastosComponent } from './components/insertsComponents/solicitud-aprobacion-gastos/solicitud-aprobacion-gastos.component';
import { SolicitudCompraComponent } from './components/insertsComponents/solicitud-compra/solicitud-compra.component';
import { SolicitudFormacionComponent } from './components/insertsComponents/solicitud-formacion/solicitud-formacion.component';
import { SolicitudViajesComponent } from './components/insertsComponents/solicitud-viajes/solicitud-viajes.component';
import { SolicitudesListComponent } from './components/validadores/solicitudes-list/solicitudes-list.component';
import { SolicitudesViewComponent } from './components/validadores/formaciones/solicitudes-view/solicitudes-view.component';
import { ViewViajesComponent } from './components/validadores/viajes/view-viajes/view-viajes.component';
import { ViewGastosComponent } from './components/validadores/gastos/view-gastos/view-gastos.component';
import { ViewComprasComponent } from './components/validadores/compras/view-compras/view-compras.component';
import { DetailUserRequestComponent } from './components/home/detail-user-request/detail-user-request.component';
import { C404Component } from './components/c404/c404.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  { path: "formacion", component: SolicitudFormacionComponent },
  { path: "viajes", component: SolicitudViajesComponent },
  { path: "gastos", component: SolicitudAprobacionGastosComponent },
  { path: "compras", component: SolicitudCompraComponent },
  { path: "home", component: HomeComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "homeValidadores", component: SolicitudesListComponent },
  { path: "homeValidadores/Formacion/:guid", component: SolicitudesViewComponent },
  { path: "homeValidadores/Viaje/:guid", component: ViewViajesComponent },
  { path: "homeValidadores/Gasto/:guid", component: ViewGastosComponent },
  { path: "homeValidadores/Compra/:guid", component: ViewComprasComponent },
  { path: "detailRequest", component: DetailUserRequestComponent },
  { path: "**", component: C404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
