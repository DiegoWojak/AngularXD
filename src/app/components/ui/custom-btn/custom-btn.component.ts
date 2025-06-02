import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-btn.component.html',
  styleUrl: './custom-btn.component.css'
})
export class CustomBtnComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() buttonType: string = 'primary';
  @Input() size: string = 'medium';
  @Input() disabled: boolean = true;
  @Input() extraClasses: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
