import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
     
  }

  loginUser(e) {
    e.preventDefault();
    let userName = e.target.elements[0].value;
    let userPassword = e.target.elements[1].value;
    console.log(userName, userPassword);

    if (userName === 'admin' && userPassword === 'admin') {
      this.authService.setUserLoggedIn();
      this.router.navigate(['/users']);
    }
  }
}
