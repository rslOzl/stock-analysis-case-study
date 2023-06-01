import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import { map } from 'rxjs';


@Component({
  selector: 'vex-stock-analysis-date-select',
  templateUrl: './stock-analysis-date-select.component.html',
  styleUrls: ['./stock-analysis-date-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class StockAnalysisDateSelectComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['IBM', 'AAPL', 'MSFT', 'AMZN', 'GOOG'];
  selectedStocks: string[] = [];

  startDate: Date;
  endDate: Date;


  events: string[] = [];
  stockData: any[] = [];


  stock: [];


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getStockData('IBM');
  }

  getStockData(symbol: string) {
    return this.apiService.getStockData(symbol)
      .pipe(
        map(data => {
          const result = [];
          if (data && data["Time Series (5min)"]) {
            Object.entries(data['Time Series (5min)']).forEach(([date, timeSeriesDaily]) => {
              result.push({
                date: date,
                close: timeSeriesDaily['4. close']
              });
            });
          }
          return result;
        })
      );
  }

  onSelectionChange(event: any) {
    console.log('Seçilen veriler:', this.selectedStocks);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  generatedChartAndTable() {
    this.selectedStocks.forEach(res => {
      this.getStockData(res).subscribe(stocks => {
        this.stockData = stocks;
      });
    });
  }

}
