import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mainflujo-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainflujo-panel.component.html',
  styleUrl: './mainflujo-panel.component.css'
})

export class MainflujoPanelComponent {
  @Input() title: string = 'Unknow Panel Title';
  @Input() showClose: boolean = true;
  @Input() panelClass: string = 'medium';

  onClose() {
      // Emit close event
    }
}
