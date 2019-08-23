import { Component, OnInit, ViewChild } from '@angular/core';
import { UxgWizard, UxgWizardTitle } from '@ffdc/uxg-angular-components/wizard';

@Component({
  selector: 'ffdc-wizard-demo',
  templateUrl: './wizard-demo.component.html',
  styleUrls: ['./wizard-demo.component.scss']
})
export class WizardDemoComponent implements OnInit {
  @ViewChild('uxgWizard', { static: true }) wizard: UxgWizard;
  @ViewChild('uxgWizardTitle', { static: true }) wizardTitle: UxgWizardTitle;

  title: 'UXG Wizard Demo';

  ngOnInit() {
  }
}
