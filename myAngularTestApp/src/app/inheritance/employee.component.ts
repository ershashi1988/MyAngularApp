import { Component } from '@angular/core';
import { PersonComponent } from './person.component';

@Component({
  selector: 'app-employee',
  template: `<h2>Child component<h2><p>Employee Details:{{Id}} , {{name}} ,{{address}}</p>
  `,
  styles: [
  ]
})
export class EmployeeComponent extends PersonComponent {
  Id:number;
constructor(){
  super();
this.Id=1;
this.name="shashi bhushan";
this.address="faridabad";
}
}
