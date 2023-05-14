import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, EmailValidator } from '@angular/forms';
import { emailValidator } from '../email-validator.directive.directive';

interface IUser {
  name: string;
  username: string;
  email: string;
  contact:string;
  password: string;
  showPassword: boolean;
}
@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styles: [
  ]
})
export class ModelDrivenComponent implements OnInit{
  reactiveForm!: FormGroup;
  user: IUser;
 constructor(){
  this.user = {} as IUser;
 }
 ngOnInit():void{
  this.reactiveForm=new FormGroup({
    name:new FormControl(this.user.name,[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    username:new FormControl(this.user.username,[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
    email:new FormControl(this.user.email,[
      Validators.required,
      Validators.email,
      emailValidator()
    ]),
    contact:new FormControl(this.user.contact,[
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
    ]),
    password:new FormControl(this.user.password,[
      Validators.required,
      Validators.minLength(15)
    ]),
  })
 }


get name() {
  return this.reactiveForm.get('name')!;
}
get username() {
  return this.reactiveForm.get('username')!;
}
get email() {
  return this.reactiveForm.get('email')!;
}
get contact() {
  return this.reactiveForm.get('contact')!;
}
get password() {
  return this.reactiveForm.get('password')!;
}
get showPassword() {
  return this.reactiveForm.get('showPassword')!;
}
public validate(): void {
  if (this.reactiveForm.invalid) {
    for (const control of Object.keys(this.reactiveForm.controls)) {
      this.reactiveForm.controls[control].markAsTouched();
    }
    return;
  }

  this.user = this.reactiveForm.value;

  console.info('Name:', this.user.name);
  console.info('Username:', this.user.username);
  console.info('Email:', this.user.email);
  console.info('Password:', this.user.password);
}
}

