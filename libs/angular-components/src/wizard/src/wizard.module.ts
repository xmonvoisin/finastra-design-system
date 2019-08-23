import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UxgWizardButton } from './wizard-button/wizard-button.component';
import { UxgWizardPageDescription } from './wizard-page/wizard-page-description.directive';
import { UxgWizardPageTitle } from './wizard-page/wizard-page-title.directive';
import { UxgWizardPage } from './wizard-page/wizard-page.component';
import { UxgWizard, UxgWizardTitle } from './wizard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatTreeModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatTreeModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  declarations: [UxgWizard, UxgWizardTitle, UxgWizardPage, UxgWizardPageTitle, UxgWizardPageDescription, UxgWizardButton],
  exports: [
    UxgWizard,
    UxgWizardTitle,
    UxgWizardPage,
    UxgWizardPageTitle,
    UxgWizardPageDescription,
    UxgWizardButton
  ]
})
export class WizardModule { }
