import { Component } from '@angular/core';
import { MealsNavbarComponent } from "../meals-navbar/meals-navbar.component";
import { FoodProduct } from '../../app/Models/FoodProduct';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-breakfast',
  imports: [MealsNavbarComponent, CardComponent],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {
AllProducts:FoodProduct[]=
[
  {
    "MealTitle": "Bread omelette",
    "ImgPath": "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "53076"
    },
    {
    "MealTitle": "Breakfast Potatoes",
    "ImgPath": "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52965"
    },
    {
    "MealTitle": "English Breakfast",
    "ImgPath": "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52895"
    },
    {
    "MealTitle": "Fruit and Cream Cheese Breakfast Pastries",
    "ImgPath": "https://www.themealdb.com/images/media/meals/1543774956.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52957"
    },
    {
    "MealTitle": "Full English Breakfast",
    "ImgPath": "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52896"
    },
    {
    "MealTitle": "Home-made Mandazi",
    "ImgPath": "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52967"
    },
    {
    "MealTitle": "Salmon Eggs Eggs Benedict",
    "ImgPath": "https://www.themealdb.com/images/media/meals/1550440197.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52962"
    },
    {
    "MealTitle": "Smoked Haddock Kedgeree",
    "ImgPath": "https://www.themealdb.com/images/media/meals/1550441275.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52964"
    }
]
}
