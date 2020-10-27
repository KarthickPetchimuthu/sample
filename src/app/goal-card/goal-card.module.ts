import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalCardComponent } from './goal-card.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    GoalCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    GoalCardComponent,MatCardModule,CommonModule
  ]
})
export class GoalCardModule { }
