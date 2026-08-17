import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToWatchComponent } from './ways-to-watch.component';

describe('WaysToWatchComponent', () => {
  let component: WaysToWatchComponent;
  let fixture: ComponentFixture<WaysToWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaysToWatchComponent]
    });
    fixture = TestBed.createComponent(WaysToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
