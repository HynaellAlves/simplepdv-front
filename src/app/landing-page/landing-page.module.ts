import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    HomeComponent,
    AssinaturaComponent,
    CadastroComponent
  ],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
