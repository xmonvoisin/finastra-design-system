import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDemoComponent } from './wizard-demo.component';
import { WizardModule } from '@ffdc/uxg-angular-components/wizard';

describe('WizardDemoComponent', () => {
  let component: WizardDemoComponent;
  let fixture: ComponentFixture<WizardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ WizardModule ],
      declarations: [ WizardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
