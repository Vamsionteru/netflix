import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticMoviesComponent } from './romantic-movies.component';

describe('RomanticMoviesComponent', () => {
  let component: RomanticMoviesComponent;
  let fixture: ComponentFixture<RomanticMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanticMoviesComponent]
    });
    fixture = TestBed.createComponent(RomanticMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
