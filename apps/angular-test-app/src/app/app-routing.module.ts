import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';

import { routes } from './routes';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { VectorMapModule } from '@ffdc/uxg-angular-components/vector-map';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    GlobalSearchModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    VectorMapModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent,
    VectorMapDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
