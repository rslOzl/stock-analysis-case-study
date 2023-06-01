import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import {StockAnalysisComponent} from "../pages/stock-analysis/stock-analysis.component";
import {
  StockAnalysisDateSelectComponent
} from "../component/stock-analysis-date-select/stock-analysis-date-select.component";
import {StockAnalysisGraphicComponent} from "../component/stock-analysis-graphic/stock-analysis-graphic.component";
import {StockAnalysisTableComponent} from "../component/stock-analysis-table/stock-analysis-table.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, StockAnalysisComponent, StockAnalysisDateSelectComponent, StockAnalysisGraphicComponent, StockAnalysisTableComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Vex
        VexModule,
        CustomLayoutModule,
        MatGridListModule,
        MatOptionModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatTableModule,
        FormsModule,
        MatCardModule
    ],
  providers: [],
  exports: [
    StockAnalysisComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
