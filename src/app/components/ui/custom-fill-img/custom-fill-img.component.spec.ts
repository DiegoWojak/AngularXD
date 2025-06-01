import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFillImgComponent } from './custom-fill-img.component';

describe('CustomFillImgComponent', () => {
  let component: CustomFillImgComponent;
  let fixture: ComponentFixture<CustomFillImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFillImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFillImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
