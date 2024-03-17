import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentModule } from 'src/app/mat-component.module';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
     MatComponentModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[AuthService]
})
export class LoginModule { }
