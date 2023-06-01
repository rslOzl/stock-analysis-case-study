import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAnalysisGraphicComponent } from './stock-analysis-graphic.component';

describe('StockAnalysisGraphicComponent', () => {
  let component: StockAnalysisGraphicComponent;
  let fixture: ComponentFixture<StockAnalysisGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAnalysisGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAnalysisGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
