import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <p>
      person works!
    </p>
  `,
  styles: [
  ]
})
export class PersonComponent {
  name:string | undefined;
  address:string | undefined;


}
