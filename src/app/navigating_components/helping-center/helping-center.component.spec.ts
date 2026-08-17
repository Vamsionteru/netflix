import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingCenterComponent } from './helping-center.component';

describe('HelpingCenterComponent', () => {
  let component: HelpingCenterComponent;
  let fixture: ComponentFixture<HelpingCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpingCenterComponent]
    });
    fixture = TestBed.createComponent(HelpingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
