import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicWorldsComponent } from './epic-worlds.component';

describe('EpicWorldsComponent', () => {
  let component: EpicWorldsComponent;
  let fixture: ComponentFixture<EpicWorldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpicWorldsComponent]
    });
    fixture = TestBed.createComponent(EpicWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
