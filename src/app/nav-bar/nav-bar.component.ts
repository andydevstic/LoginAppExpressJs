import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  selectedAction = '';
  modalID = '';

  constructor() { }

  ngOnInit() {
  }

  signup(): void {
    this.selectedAction = 'Sign Up';
    this.modalID = 'signupModal';
  }

  login(): void {
    this.selectedAction = 'Log In';
    this.modalID = 'loginModal';
  }

}
