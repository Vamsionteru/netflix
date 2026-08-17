import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateInformationComponent } from './corporate-information.component';

describe('CorporateInformationComponent', () => {
  let component: CorporateInformationComponent;
  let fixture: ComponentFixture<CorporateInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateInformationComponent]
    });
    fixture = TestBed.createComponent(CorporateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
