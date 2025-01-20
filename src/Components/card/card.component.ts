import { Component, Input } from '@angular/core';
import { FoodProduct } from '../../app/Models/FoodProduct';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input({required:true}) AllFoodProducts:FoodProduct={} as FoodProduct;
}
