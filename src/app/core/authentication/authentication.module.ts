// authentication.module.ts
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent,
        // other components, directives, or pipes
    ],
    imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
})
export class AuthenticationModule { }
