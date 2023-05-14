import { Component } from '@angular/core';
import { User } from '../Models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styles: [
  ]
})
export class TemplatedrivenComponent {
  user: User = new User;
  constructor(){
    this.user.Name='shashi';
  }
  SaveData(form:NgForm){
      if(form.valid){
        alert('Form is valid! Thanks for visit.')
      }
  }
}
