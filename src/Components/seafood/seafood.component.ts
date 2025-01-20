import { Component, OnInit} from '@angular/core';
import { MealsNavbarComponent } from "../meals-navbar/meals-navbar.component";
import { CardComponent } from "../card/card.component";
import { FoodProduct } from '../../app/Models/FoodProduct';

@Component({
  selector: 'app-seafood',
  imports: [MealsNavbarComponent, CardComponent],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.css'
})
export class SeafoodComponent   {
 allProducts : FoodProduct[]=
 [
   {
      "MealTitle": "Baked salmon with fennel & tomatoes",
      "ImgPath": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52959"
      },
      {
      "MealTitle": "Cajun spiced fish tacos",
      "ImgPath": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52819"
      },
      {
      "MealTitle": "Escovitch Fish",
      "ImgPath": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52944"
      },
      {
      "MealTitle": "Fish fofos",
      "ImgPath": "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53043"
      },
      {
      "MealTitle": "Fish pie",
      "ImgPath": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52802"
      },
      {
      "MealTitle": "Fish Soup (Ukha)",
      "ImgPath": "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53079"
      },
      {
      "MealTitle": "Fish Stew with Rouille",
      "ImgPath": "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52918"
      },
      {
      "MealTitle": "Garides Saganaki",
      "ImgPath": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52764"
      },
      {
      "MealTitle": "Grilled Portuguese sardines",
      "ImgPath": "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53041"
      },
      {
      "MealTitle": "Honey Teriyaki Salmon",
      "ImgPath": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52773"
      },
      {
      "MealTitle": "Kedgeree",
      "ImgPath": "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52887"
      },
      {
      "MealTitle": "Kung Po Prawns",
      "ImgPath": "https://www.themealdb.com/images/media/meals/1525873040.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52946"
      },
      {
      "MealTitle": "Laksa King Prawn Noodles",
      "ImgPath": "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52821"
      },
      {
      "MealTitle": "Mediterranean Pasta Salad",
      "ImgPath": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52777"
      },
      {
      "MealTitle": "Mee goreng mamak",
      "ImgPath": "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53048"
      },
      {
      "MealTitle": "Nasi lemak",
      "ImgPath": "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53051"
      },
      {
      "MealTitle": "Portuguese fish stew (Caldeirada de peixe)",
      "ImgPath": "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53045"
      },
      {
      "MealTitle": "Recheado Masala Fish",
      "ImgPath": "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52809"
      },
      {
      "MealTitle": "Salmon Avocado Salad",
      "ImgPath": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52960"
      },
      {
      "MealTitle": "Salmon Prawn Risotto",
      "ImgPath": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52823"
      },
      {
      "MealTitle": "Saltfish and Ackee",
      "ImgPath": "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52936"
      },
      {
      "MealTitle": "Seafood fideuà",
      "ImgPath": "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52836"
      },
      {
      "MealTitle": "Shrimp Chow Fun",
      "ImgPath": "https://www.themealdb.com/images/media/meals/1529445434.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52953"
      },
      {
      "MealTitle": "Sledz w Oleju (Polish Herrings)",
      "ImgPath": "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53023"
      },
      {
      "MealTitle": "Spring onion and prawn empanadas",
      "ImgPath": "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53040"
      },
      {
      "MealTitle": "Sushi",
      "ImgPath": "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "53065"
      },
      {
      "MealTitle": "Three Fish Pie",
      "ImgPath": "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52882"
      },
      {
      "MealTitle": "Tuna and Egg Briks",
      "ImgPath": "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52975"
      },
      {
      "MealTitle": "Tuna Nicoise",
      "ImgPath": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
            "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
      "idMeal": "52852"
      }
 ]
  
}
