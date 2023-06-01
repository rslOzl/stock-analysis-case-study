import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAnalysisTableComponent } from './stock-analysis-table.component';

describe('StockAnalysisTableComponent', () => {
  let component: StockAnalysisTableComponent;
  let fixture: ComponentFixture<StockAnalysisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAnalysisTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAnalysisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
