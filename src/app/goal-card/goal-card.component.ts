import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {

  @Input() imgStr ="";
  title: string="Pay off student loan";
  constructor() { }

  ngOnInit(): void {
  }

}
