import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";
import { TeamChildComponent } from "../team-child/team-child.component";

@Component({
  selector: 'app-team',
  imports: [ContentComponent, TeamChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
 IsHidden!:boolean;
}
