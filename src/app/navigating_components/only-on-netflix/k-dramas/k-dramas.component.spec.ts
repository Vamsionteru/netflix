import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDramasComponent } from './k-dramas.component';

describe('KDramasComponent', () => {
  let component: KDramasComponent;
  let fixture: ComponentFixture<KDramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KDramasComponent]
    });
    fixture = TestBed.createComponent(KDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
