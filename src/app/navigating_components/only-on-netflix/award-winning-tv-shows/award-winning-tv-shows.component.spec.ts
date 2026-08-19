import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardWinningTvShowsComponent } from './award-winning-tv-shows.component';

describe('AwardWinningTvShowsComponent', () => {
  let component: AwardWinningTvShowsComponent;
  let fixture: ComponentFixture<AwardWinningTvShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardWinningTvShowsComponent]
    });
    fixture = TestBed.createComponent(AwardWinningTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
