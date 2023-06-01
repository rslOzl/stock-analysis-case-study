import {ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Chart, registerables} from 'chart.js';


@Component({
  selector: 'vex-stock-analysis-graphic',
  templateUrl: './stock-analysis-graphic.component.html',
  styleUrls: ['./stock-analysis-graphic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockAnalysisGraphicComponent implements OnInit {

  chart: any;
  @Input() chartData;

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "IBM",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "AAPL",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  constructor() {
    Chart.register(...registerables);

  }

  ngOnInit(): void {
    console.log(this.chartData)
    this.createChart();
  }

}
