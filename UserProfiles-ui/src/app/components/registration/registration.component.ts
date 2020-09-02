import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  form : FormGroup;

  constructor(private as: AuthService) {
      this.form = new FormGroup({
        "fio": new FormControl("", [Validators.required, Validators.maxLength(255)]),
        "email": new FormControl("", [Validators.required, Validators.email, Validators.maxLength(255)]),
        "password": new FormControl("", [Validators.required, Validators.maxLength(255)]),
        "confirmPassword": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    });
   }
  
  ngOnInit(): void {
  }

  submit(): void {
    this.as.registration(this.form.value);
  }

}