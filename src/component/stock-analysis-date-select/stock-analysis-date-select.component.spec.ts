import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAnalysisDateSelectComponent } from './stock-analysis-date-select.component';

describe('StockAnalysisDateSelectComponent', () => {
  let component: StockAnalysisDateSelectComponent;
  let fixture: ComponentFixture<StockAnalysisDateSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAnalysisDateSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAnalysisDateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
