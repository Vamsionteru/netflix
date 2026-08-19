import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTvDramasComponent } from './international-tv-dramas.component';

describe('InternationalTvDramasComponent', () => {
  let component: InternationalTvDramasComponent;
  let fixture: ComponentFixture<InternationalTvDramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalTvDramasComponent]
    });
    fixture = TestBed.createComponent(InternationalTvDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
