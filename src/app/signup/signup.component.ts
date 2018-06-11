import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private userEmail: String;
  private userPassword: String;
  private userConfirmPassword: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signup() {
  const data = {userEmail: this.userEmail,
              userPassword: this.userPassword,
              userConfirmPassword: this.userConfirmPassword };
  this.userService.register(data)
  .subscribe(response => alert(response));
  }

}
