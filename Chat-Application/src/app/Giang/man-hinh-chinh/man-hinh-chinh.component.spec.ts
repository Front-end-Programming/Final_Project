import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManHinhChinhComponent } from './man-hinh-chinh.component';

describe('ManHinhChinhComponent', () => {
  let component: ManHinhChinhComponent;
  let fixture: ComponentFixture<ManHinhChinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManHinhChinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManHinhChinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
