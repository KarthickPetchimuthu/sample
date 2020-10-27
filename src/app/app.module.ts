import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';

import { MatButtonModule} from '@angular/material/button';
import { GoalCardComponent } from './goal-card/goal-card.component';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    GoalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    NgChartjsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
