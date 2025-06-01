import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainflujoPanelComponent } from './mainflujo-panel.component';

describe('MainflujoPanelComponent', () => {
  let component: MainflujoPanelComponent;
  let fixture: ComponentFixture<MainflujoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainflujoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainflujoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
