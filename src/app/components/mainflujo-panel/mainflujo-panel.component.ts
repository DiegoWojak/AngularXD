import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CustomBtnComponent } from '../ui/custom-btn/custom-btn.component';
import { CustomFillImgComponent } from '../ui/custom-fill-img/custom-fill-img.component';
import { CustomSliderComponent } from '../ui/custom-slider/custom-slider.component';

@Component({
  selector: 'app-mainflujo-panel',
  standalone: true,
  imports: [
    CommonModule, 
    CustomBtnComponent,
    CustomFillImgComponent,
    CustomSliderComponent
  ],
  templateUrl: './mainflujo-panel.component.html',
  styleUrl: './mainflujo-panel.component.css'
})

export class MainflujoPanelComponent {
  fillValue = 0;
  @Input() title: string = 'Evaluación de Accesos';
  @Input() showClose: boolean = true;
  @Input() panelClass: string = 'min-h-150';

  //min-width-200 min-height-100
  //min-width-210 min-height-150
  //min-width-220 min-height-600

  onClose() {
      // Emit close event
  }

  onSliderTrackClick(value: number) {
    this.fillValue = value;
  } 
}
