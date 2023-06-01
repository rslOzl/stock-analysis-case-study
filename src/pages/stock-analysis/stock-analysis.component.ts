import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'vex-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrls: ['./stock-analysis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class StockAnalysisComponent {


  constructor() {
  }


}
