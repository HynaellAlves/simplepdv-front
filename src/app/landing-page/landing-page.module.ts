import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    HomeComponent,
    AssinaturaComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [CommonModule, LandingPageRoutingModule, MatCardModule, MatCheckboxModule],
})
export class LandingPageModule {}
