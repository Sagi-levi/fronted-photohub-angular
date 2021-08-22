import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePicComponent } from './storage-pic.component';

describe('StoragePicComponent', () => {
  let component: StoragePicComponent;
  let fixture: ComponentFixture<StoragePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoragePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
