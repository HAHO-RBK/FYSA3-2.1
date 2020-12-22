import { Component } from '@angular/core';
import { User, Role } from './_models';
import { AuthenticationService } from './_services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentUser: User;
  role: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe((x) => {
      this.currentUser = x;
      if (x && x.role === 'User') {
        this.role = 'User';
      }
      console.log(x);
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  changeview(x) {
    this.role = x;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
