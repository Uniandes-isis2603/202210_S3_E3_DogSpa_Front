import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioModule } from './servicio/servicio.module';
import { ProductoModule } from './producto/producto.module';
import { SedeModule } from './sede/sede.module';
import { HallOfFameModule } from './hall-of-fame/hall-of-fame.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicioModule,
    HttpClientModule,
    ProductoModule,
    SedeModule,
    HallOfFameModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
