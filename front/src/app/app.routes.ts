import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './components/home/home.component';
import { MisGraficasComponent } from './components/misGraficas/misGraficas.component';
import { ChartComponent } from './components/chart/chart.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'misGraficas', component: MisGraficasComponent },
  { path: 'chart/:user/:id', component: ChartComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'new', component: NewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true } );
