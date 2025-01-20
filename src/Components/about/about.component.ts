import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-about',
  imports: [HomeComponent, ContactsComponent, ContentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
