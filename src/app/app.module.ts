import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CadastroComponent } from './landing-page/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraficoVendasComponent } from './shared/grafico-vendas/grafico-vendas.component';

@NgModule({
  declarations: [AppComponent, GraficoVendasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    DashboardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
