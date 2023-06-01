import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "IBM", name: '273.25', weight: "125.54", symbol: '245.45'},
  {position: "AAPL", name: '273.25', weight: "125.54", symbol: '245.45'},
];

@Component({
  selector: 'vex-stock-analysis-table',
  templateUrl: './stock-analysis-table.component.html',
  styleUrls: ['./stock-analysis-table.component.scss']
})
export class StockAnalysisTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
