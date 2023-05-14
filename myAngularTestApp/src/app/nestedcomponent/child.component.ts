import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {
 @Input() mycompany: string | undefined;
 @Output() myGreet:EventEmitter<string>=new EventEmitter<string>();
  CallMethodToEmmit(){
  this.myGreet.emit('hi this is nested component, access from child to parent component');
 }
}
