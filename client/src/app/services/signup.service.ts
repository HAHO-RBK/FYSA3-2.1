import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  http: HttpClient;
  url = '/workerRegister';
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  addUser(
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    location: string
  ) {
    const body = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      location: location,
    };
    return this.http.post(this.url, body);
  }
}
