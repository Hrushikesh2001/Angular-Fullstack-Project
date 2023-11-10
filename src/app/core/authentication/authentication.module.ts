// authentication.module.ts
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        // LoginComponent,
        // other components, directives, or pipes
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
    ],
})
export class AuthenticationModule { }
