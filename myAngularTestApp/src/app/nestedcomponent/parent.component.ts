import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent {
companyName:string;
 constructor(){
 this.companyName='EbixCash'
}
Greet(msg:string){
 alert(msg);
}
}
