import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticallyAcclaimedTvShowsComponent } from './critically-acclaimed-tv-shows.component';

describe('CriticallyAcclaimedTvShowsComponent', () => {
  let component: CriticallyAcclaimedTvShowsComponent;
  let fixture: ComponentFixture<CriticallyAcclaimedTvShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriticallyAcclaimedTvShowsComponent]
    });
    fixture = TestBed.createComponent(CriticallyAcclaimedTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
