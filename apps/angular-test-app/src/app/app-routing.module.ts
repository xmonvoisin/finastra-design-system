import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { TableModule } from '@ffdc/uxg-angular-components/table';

import { routes } from './routes';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    GlobalSearchModule,
    TableModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent, WizardDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
