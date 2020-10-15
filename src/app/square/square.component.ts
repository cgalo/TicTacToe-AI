import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styles: []
})
export class SquareComponent  {
  @Input() value: 'X' | 'O';

}
