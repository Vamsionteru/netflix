import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyOnNetflixComponent } from './only-on-netflix.component';

describe('OnlyOnNetflixComponent', () => {
  let component: OnlyOnNetflixComponent;
  let fixture: ComponentFixture<OnlyOnNetflixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyOnNetflixComponent]
    });
    fixture = TestBed.createComponent(OnlyOnNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
