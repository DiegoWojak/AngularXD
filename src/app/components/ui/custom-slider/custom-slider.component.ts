import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-slider',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSliderComponent),
      multi: true
    }
  ],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.css'
})
export class CustomSliderComponent implements ControlValueAccessor {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<number>();

  private _value: number = 0;
  private isDragging = false;

  private onChange = (value: number) => {};
  private onTouched = () => {};

  get currentValue(): number {
    return this._value;
  }

  set currentValue(value: number) {
    this._value = Math.min(Math.max(value, this.min), this.max);
    this.onChange(this._value);
    this.valueChange.emit(this._value);
  }

  get fillPercentage(): number {
    return ((this._value - this.min) / (this.max - this.min)) * 100;
  }

  get thumbPosition(): number {
    return this.fillPercentage;
  }

  writeValue(value: number): void {
    this._value = value || 0;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onTrackClick(event: MouseEvent): void {
    const track = event.currentTarget as HTMLElement;
    const rect = track.getBoundingClientRect();
    const percentage = (event.clientX - rect.left) / rect.width;
    const newValue = this.min + (percentage * (this.max - this.min));
    this.currentValue = Math.round(newValue / this.step) * this.step;
  }

  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    event.preventDefault();

    const handleMouseMove = (e: MouseEvent) => {
      if (!this.isDragging) return;
      
      const track = (event.currentTarget as HTMLElement).parentElement!;
      const rect = track.getBoundingClientRect();
      const percentage = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const newValue = this.min + (percentage * (this.max - this.min));
      this.currentValue = Math.round(newValue / this.step) * this.step;
    };

    const handleMouseUp = () => {
      this.isDragging = false;
      this.onTouched();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }
}
