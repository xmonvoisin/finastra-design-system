import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';

import { routes } from './routes';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { WizardModule } from '@ffdc/uxg-angular-components/wizard';
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
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    WizardModule
  ],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent,
    WizardDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
