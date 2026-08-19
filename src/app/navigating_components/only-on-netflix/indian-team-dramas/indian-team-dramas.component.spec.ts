import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTeamDramasComponent } from './indian-team-dramas.component';

describe('IndianTeamDramasComponent', () => {
  let component: IndianTeamDramasComponent;
  let fixture: ComponentFixture<IndianTeamDramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianTeamDramasComponent]
    });
    fixture = TestBed.createComponent(IndianTeamDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
