import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodingsComponent } from './uplodings.component';

describe('UplodingsComponent', () => {
  let component: UplodingsComponent;
  let fixture: ComponentFixture<UplodingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplodingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
