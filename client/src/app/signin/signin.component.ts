import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router, private service: SigninService) {}

  onLogin() {
    if (this.email.length == 0) {
      alert('email field can not be empty');
    } else if (this.password.length == 0) {
      alert('password field can not be empty');
    } else {
      this.service.login(this.email, this.password).subscribe((res: any) => {
        console.log(res);
        if (res.email !== null && res.role === 'manager') {
          console.log(res);
          localStorage['email'] = res.email;
          localStorage['password'] = res.password;
          this.router.navigate(['/signin']);
        } else if (res === null) {
          alert('wrong email or password');
        }
      });
    }
  }

  ngOnInit(): void {}
}
