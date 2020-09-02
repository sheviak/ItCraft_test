import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../app-injection-tokens';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseApiUrl = `${this.apiUrl}api/users`;

  constructor(
    private http: HttpClient, 
    @Inject(AUTH_API_URL) private apiUrl: string) 
    { }

  getUsers() {
    return this.http.get<User[]>(`${this.baseApiUrl}`);
  }
}