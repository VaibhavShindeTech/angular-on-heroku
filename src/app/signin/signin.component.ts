import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signinform:NgForm){
    console.log(signinform);
    console.log(signinform.value.emailField);
    console.log(signinform.value.passwordField);
    console.log(signinform.value.termField);
    console.log(signinform.value.genderField);
    console.log(signinform.value.countryField);
  }
}
