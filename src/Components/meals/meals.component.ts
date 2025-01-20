import { Component } from '@angular/core';
import { MealsNavbarComponent } from "../meals-navbar/meals-navbar.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [MealsNavbarComponent,RouterOutlet],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
