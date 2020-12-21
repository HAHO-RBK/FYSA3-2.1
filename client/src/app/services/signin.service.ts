import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  http: HttpClient;
  url = '/signin';

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  login(email: String, password: String) {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(this.url, body);
  }
}
