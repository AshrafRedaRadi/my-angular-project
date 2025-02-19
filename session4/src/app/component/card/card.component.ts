import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() postData: any; //علشان مش عارف اللي هيجيلي ايه any وخليته , parent دي هتجيلي من ال  property معناه ان ال
}
