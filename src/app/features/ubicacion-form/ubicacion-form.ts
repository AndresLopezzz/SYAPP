import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ubicacion } from '../../core/models';

@Component({
  selector: 'app-ubicacion-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ubicacion-form.html',
  styleUrls: ['./ubicacion-form.css']
})
export class UbicacionFormComponent {
  @Input() ubicacion!: Ubicacion;
  @Output() onUbicacionChange = new EventEmitter<Ubicacion>();
  @Output() onFieldTouched = new EventEmitter<string>();

  touchedFields: Set<string> = new Set<string>();

  onInputChange(): void {
    this.onUbicacionChange.emit(this.ubicacion);
  }

  markAsTouched(field: string): void {
    this.touchedFields.add(field);
    this.onFieldTouched.emit(field);
  }

  isTouched(field: string): boolean {
    return this.touchedFields.has(field);
  }

  isFieldValid(field: keyof Ubicacion): boolean {
    const value = this.ubicacion[field];
    return value !== null && value !== undefined && value.trim().length > 0;
  }

  isFormValid(): boolean {
    return (
      this.isFieldValid('ciudad') &&
      this.isFieldValid('direccion') &&
      this.isFieldValid('celular') &&
      this.isFieldValid('correo')
    );
  }
}
