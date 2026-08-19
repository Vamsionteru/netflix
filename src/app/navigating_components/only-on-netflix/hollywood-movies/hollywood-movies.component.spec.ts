import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodMoviesComponent } from './hollywood-movies.component';

describe('HollywoodMoviesComponent', () => {
  let component: HollywoodMoviesComponent;
  let fixture: ComponentFixture<HollywoodMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HollywoodMoviesComponent]
    });
    fixture = TestBed.createComponent(HollywoodMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
