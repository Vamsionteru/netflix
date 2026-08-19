import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvComediesComponent } from './tv-comedies.component';

describe('TvComediesComponent', () => {
  let component: TvComediesComponent;
  let fixture: ComponentFixture<TvComediesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvComediesComponent]
    });
    fixture = TestBed.createComponent(TvComediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
