import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUser } from './board-user';

describe('BoardUser', () => {
  let component: BoardUser;
  let fixture: ComponentFixture<BoardUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
