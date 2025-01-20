import { Component } from '@angular/core';
import { MealsNavbarComponent } from "../meals-navbar/meals-navbar.component";
import { FoodProduct } from '../../app/Models/FoodProduct';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-pasta',
  imports: [MealsNavbarComponent, CardComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  AllProducts:FoodProduct[]=
  [
    {
      "MealTitle": "Chilli prawn linguine",
      "ImgPath": "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52839"
      },
      {
      "MealTitle": "Fettuccine Alfredo",
      "ImgPath": "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "53064"
      },
      {
      "MealTitle": "Fettucine alfredo",
      "ImgPath": "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52835"
      },
      {
      "MealTitle": "Grilled Mac and Cheese Sandwich",
      "ImgPath": "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52829"
      },
      {
      "MealTitle": "Lasagna Sandwiches",
      "ImgPath": "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52987"
      },
      {
      "MealTitle": "Lasagne",
      "ImgPath": "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52844"
      },
      {
      "MealTitle": "Pilchard puttanesca",
      "ImgPath": "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52837"
      },
      {
      "MealTitle": "Spaghetti alla Carbonara",
      "ImgPath": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52982"
      },
      {
      "MealTitle": "Venetian Duck Ragu",
      "ImgPath": "https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg",
      "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
  ,
      "idMeal": "52838"
      }
  ]

}
