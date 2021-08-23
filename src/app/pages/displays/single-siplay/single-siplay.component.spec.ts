import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSiplayComponent } from './single-siplay.component';

describe('SingleSiplayComponent', () => {
  let component: SingleSiplayComponent;
  let fixture: ComponentFixture<SingleSiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSiplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
