import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-fill-img',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './custom-fill-img.component.html',
  styleUrl: './custom-fill-img.component.css'
})
export class CustomFillImgComponent {
  @Input() imageUrl: string = '';
  @Input() alt: string = '';
  @Input() fillPercentage: number = 0;
  @Input() width: number = 200;
  @Input() height: number = 200;
  @Input() showIndicator: boolean = true;

  Math = Math;
}
