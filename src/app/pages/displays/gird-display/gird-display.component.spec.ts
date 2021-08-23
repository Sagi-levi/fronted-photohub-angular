import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirdDisplayComponent } from './gird-display.component';

describe('GirdDisplayComponent', () => {
  let component: GirdDisplayComponent;
  let fixture: ComponentFixture<GirdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
