import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  name:string='shashi';
  address:string='Faridabad'
  Eamil:string='ershashi1988@hotmail.com'
  url = 'http://www.google.com'
  greet(){
    alert("Welcome to my angular learning plateform")
  }
}
