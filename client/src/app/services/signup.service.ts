import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  http: HttpClient;
  url = '/signup';
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  addUser(
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) {
    const body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    return this.http.post(this.url, body);
  }
}
