import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: any;
  submit() {
    throw new Error('Method not implemented.');
  }
  form: any;

}
