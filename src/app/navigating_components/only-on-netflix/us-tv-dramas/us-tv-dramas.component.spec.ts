import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsTvDramasComponent } from './us-tv-dramas.component';

describe('UsTvDramasComponent', () => {
  let component: UsTvDramasComponent;
  let fixture: ComponentFixture<UsTvDramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsTvDramasComponent]
    });
    fixture = TestBed.createComponent(UsTvDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
