import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form : FormGroup;

  constructor(private as: AuthService){
    this.form = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email, Validators.maxLength(255)]),
      "password": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    });
  }

  ngOnInit(): void {
  }

  submit(){
    this.as.login(this.form.value);
  }

}