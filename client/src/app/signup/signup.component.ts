import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  username: string = '';
  first_name: string = '';
  last_name: string = '';
  password: string = '';
  email: string = '';
  location: string = '';

  service: SignupService;
  constructor(private router: Router, userservice: SignupService) {
    this.service = userservice;
  }

  addUser(f: NgForm) {
    console.log(this.email);
    if (this.email.length === 0) {
      alert('Please enter an email');
    } else if (this.password.length === 0) {
      alert('Please enter a password');
    } else {
      this.service
        .addUser(
          this.first_name,
          this.last_name,
          this.email,
          this.password,
          this.username,
          this.location
        )
        .subscribe((res: any) => {
          if (res.email !== null) {
            alert('successfully added');
            this.router.navigate(['/signup']);
          } else {
            alert('error');
          }
        });
    }
  }

  ngOnInit(): void {}
}
