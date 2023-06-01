import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomLayoutComponent} from './custom-layout/custom-layout.component';
import {StockAnalysisComponent} from "../pages/stock-analysis/stock-analysis.component";

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
       {
        path: "stock-analysis",
        component: StockAnalysisComponent,
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
