import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTvShowsComponent } from './international-tv-shows.component';

describe('InternationalTvShowsComponent', () => {
  let component: InternationalTvShowsComponent;
  let fixture: ComponentFixture<InternationalTvShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalTvShowsComponent]
    });
    fixture = TestBed.createComponent(InternationalTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
