import { NgModule } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
