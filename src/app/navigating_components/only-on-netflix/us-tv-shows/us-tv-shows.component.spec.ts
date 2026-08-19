import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsTvShowsComponent } from './us-tv-shows.component';

describe('UsTvShowsComponent', () => {
  let component: UsTvShowsComponent;
  let fixture: ComponentFixture<UsTvShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsTvShowsComponent]
    });
    fixture = TestBed.createComponent(UsTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
