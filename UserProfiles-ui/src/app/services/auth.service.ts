import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../app-injection-tokens';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RegisterUser } from '../models/registerUser';
import { LoginUser } from '../models/loginUser';

export const ACCESS_TOKEN_KEY = 'it_craft_access_token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private jwtHelpers: JwtHelperService,
    private router: Router
  ) { }

  login(user: LoginUser) {
    return this.http.post(`${this.apiUrl}api/login`, user)
      .subscribe(
        (res: any) => {
          localStorage.setItem(ACCESS_TOKEN_KEY, res.access_token);
          this.router.navigate(['/users']);
        },
        error => {
          this.showErrors(error.error);
        }
      );
  }

  registration(user: RegisterUser){
    return this.http.post(`${this.apiUrl}api/register`, user)
      .subscribe(
        (res: any) => {
          localStorage.setItem(ACCESS_TOKEN_KEY, res.access_token);
          this.router.navigate(['/users']);
        },
        error => {
          this.showErrors(error.error);
        }
      );
  }

  isAuthenticated(): boolean{
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token && !this.jwtHelpers.isTokenExpired(token);
  }

  logout(): void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }

  private showErrors(errors){
    let message = "";
    for (let key in errors) {
        message += `${errors[key]}\n`;
    }

    alert(message);
  }

}