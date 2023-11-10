import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: FormGroup = new FormGroup({});

  firstNameControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]);
  lastNameControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  phoneControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  cityControl = new FormControl('', [Validators.pattern(/^[A-Za-z]+$/)]);
  stateControl = new FormControl('', [Validators.pattern(/^[A-Za-z]+$/)]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]);

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      phone: this.phoneControl,
      city: this.cityControl,
      state: this.stateControl,
      password: this.passwordControl,
    });
  }

  submit(): void {
    if (this.registrationForm.valid) {
      // Perform your registration logic here
      console.log('Form submitted:', this.registrationForm.value);
    }
  }

  getFirstNameErrorMessage(): string {
    if (this.firstNameControl.hasError('required')) {
      return 'First name is required';
    }
    return 'Invalid first name';
  }

  getLastNameErrorMessage(): string {
    if (this.lastNameControl.hasError('required')) {
      return 'Last name is required';
    }
    return 'Invalid last name';
  }

  getEmailErrorMessage(): string {
    if (this.emailControl.hasError('required')) {
      return 'Email is required';
    }
    return 'Invalid email address';
  }

  getPhoneErrorMessage(): string {
    if (this.phoneControl.hasError('required')) {
      return 'Phone number is required';
    }
    return 'Invalid phone number (10 digits required)';
  }

  getCityErrorMessage(): string {
    return this.cityControl.hasError('pattern') ? 'Invalid city name' : '';
  }

  getStateErrorMessage(): string {
    return this.stateControl.hasError('pattern') ? 'Invalid state name' : '';
  }

  getPasswordErrorMessage(): string {
    if (this.passwordControl.hasError('required')) {
      return 'Password is required';
    }
    if (this.passwordControl.hasError('minlength')) {
      return 'Password must be at least 8 characters long';
    }
    return 'Invalid password (at least one lowercase letter, one uppercase letter, and one digit required)';
  }
}
