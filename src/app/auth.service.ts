import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {

  }
  signinUser(email: string, password: string) {
    const headers = new HttpHeaders
      ({ 'Content-Type': 'application/json' });
    let res = this.http.post('http://localhost:3000/api/login',
      { "email": email, "password": password },
      { headers: headers }); 
    alert("see your console");
    res.subscribe((response) => { console.log(response); }, (error) => { console.log(error); });
  }

  setToken() {

  }
  getToken() {

  }
  setAuthUser() {

  }
  getAuthUser() {

  }
  logout() {

  }
}
