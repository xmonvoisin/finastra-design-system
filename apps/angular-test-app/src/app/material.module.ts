import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatCardModule,
  MatChipsModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
  MatExpansionModule,
  MatBadgeModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatListModule,
    MatBadgeModule
    
  ]
})
export class MaterialModule {}
