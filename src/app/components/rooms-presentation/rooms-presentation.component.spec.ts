import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPresentationComponent } from './rooms-presentation.component';

describe('RoomsPresentationComponent', () => {
  let component: RoomsPresentationComponent;
  let fixture: ComponentFixture<RoomsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
