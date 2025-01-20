import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-child',
  imports: [],
  templateUrl: './team-child.component.html',
  styleUrl: './team-child.component.css'
})
export class TeamChildComponent {
  IsHidden:boolean=true;
@Output() MyEvent : EventEmitter<boolean> = new EventEmitter()
Hide():void
{
  this.MyEvent.emit(this.IsHidden);
}
}
