import { MealsComponent } from './../Components/meals/meals.component';
import { Routes } from '@angular/router';
import { ContactsComponent } from '../Components/contacts/contacts.component';
import { TeamComponent } from '../Components/team/team.component';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { SeafoodComponent } from '../Components/seafood/seafood.component';
import { PastaComponent } from '../Components/pasta/pasta.component';
import { BreakfastComponent } from '../Components/breakfast/breakfast.component';

export const routes: Routes = 
[
{path:"", component: ContactsComponent},
{path:"home", component: HomeComponent},
{path:"about", component: AboutComponent},
{path:"meals", component: MealsComponent , children:
    [
        {path:"seafood", component: SeafoodComponent},
        {path:"pasta", component: PastaComponent},
        {path:"breakfast", component: BreakfastComponent},
    ]
},
{path:"team", component: TeamComponent},
{path:"contacts", component: ContactsComponent},
];
