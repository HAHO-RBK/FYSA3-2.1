import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private service: SigninService) {}

  onLogin(f: NgForm) {
    console.log(f.value);
    if (this.username.length == 0) {
      alert('username field can not be empty');
    } else if (this.password.length == 0) {
      alert('password field can not be empty');
    } else {
      this.service.login(this.username, this.password).subscribe((res: any) => {
        console.log(res);
        if (res.username !== null) {
          console.log(res);
          localStorage['username'] = res.username;
          localStorage['password'] = res.password;
          this.router.navigate(['/signin']);
        } else if (res === null) {
          alert('wrong username or password');
        }
      });
    }
  }

  ngOnInit(): void {}
}
