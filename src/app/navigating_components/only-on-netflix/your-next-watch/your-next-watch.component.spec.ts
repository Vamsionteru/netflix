import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourNextWatchComponent } from './your-next-watch.component';

describe('YourNextWatchComponent', () => {
  let component: YourNextWatchComponent;
  let fixture: ComponentFixture<YourNextWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourNextWatchComponent]
    });
    fixture = TestBed.createComponent(YourNextWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
