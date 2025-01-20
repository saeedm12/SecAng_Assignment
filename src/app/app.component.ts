import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../Components/navbar/navbar.component";
import { AboutComponent } from "../Components/about/about.component";
import { ContactsComponent } from "../Components/contacts/contacts.component";
import { HomeComponent } from "../Components/home/home.component";
import { MealsComponent } from "../Components/meals/meals.component";
import { TeamComponent } from "../Components/team/team.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, ContactsComponent, HomeComponent, MealsComponent, TeamComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SecAngular';

}
