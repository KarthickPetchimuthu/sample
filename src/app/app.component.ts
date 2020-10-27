import { Component } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apollo';
  selectNav = "Dashboard";
  navList = ["Dashboard","Accounts","Profile","Activity","Support","Add Cash", "GetCash"];
  ctx = document.getElementById('myChart');
  maxDate = new Date();
  lineChartData: Array<any> = [
    { data: [{x:0, y:0},{x:10, y:100}], label: 'Series A' },
    { data: [{x:0, y:0},{x:5, y:50}], label: 'Series A' },
  ];
  currentLineChartLabelsIdx = 0;
  lineChartLabels: Array<any>;
  lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
          type: 'time',
          time: {
              unit: 'year'
          },
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
      },
    ],yAxes: [{
						scaleLabel: {
							display: true,
            },
            position: 'right'
					}]
  }
  };
  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';
}
