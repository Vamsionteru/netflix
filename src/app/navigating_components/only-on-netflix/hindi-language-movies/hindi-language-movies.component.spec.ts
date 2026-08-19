import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiLanguageMoviesComponent } from './hindi-language-movies.component';

describe('HindiLanguageMoviesComponent', () => {
  let component: HindiLanguageMoviesComponent;
  let fixture: ComponentFixture<HindiLanguageMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HindiLanguageMoviesComponent]
    });
    fixture = TestBed.createComponent(HindiLanguageMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
