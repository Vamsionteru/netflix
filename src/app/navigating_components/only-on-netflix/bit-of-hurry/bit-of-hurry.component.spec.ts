import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitOfHurryComponent } from './bit-of-hurry.component';

describe('BitOfHurryComponent', () => {
  let component: BitOfHurryComponent;
  let fixture: ComponentFixture<BitOfHurryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitOfHurryComponent]
    });
    fixture = TestBed.createComponent(BitOfHurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
