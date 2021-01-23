import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MisGraficasComponent } from './components/misGraficas/misGraficas.component';
import { ChartComponent } from './components/chart/chart.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MisGraficasComponent,
    ChartComponent,
    NewComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
