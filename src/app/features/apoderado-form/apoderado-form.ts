import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Apoderado } from '../../core/models';

@Component({
  selector: 'app-apoderado-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apoderado-form.html',
  styleUrls: ['./apoderado-form.css']
})
export class ApoderadoFormComponent {
  @Input() apoderado!: Apoderado;
  @Output() onApoderadoChange = new EventEmitter<Apoderado>();
  @Output() onFieldTouched = new EventEmitter<string>();

  touchedFields: Set<string> = new Set<string>();

  onInputChange(): void {
    this.onApoderadoChange.emit(this.apoderado);
  }

  markAsTouched(field: string): void {
    this.touchedFields.add(field);
    this.onFieldTouched.emit(field);
  }

  isTouched(field: string): boolean {
    return this.touchedFields.has(field);
  }

  isFieldValid(field: keyof Apoderado): boolean {
    const value = this.apoderado[field];
    return value !== null && value !== undefined && value.trim().length > 0;
  }

  isFormValid(): boolean {
    return (
      this.isFieldValid('tipoDocumento') &&
      this.isFieldValid('numeroDocumento') &&
      this.isFieldValid('ciudadExpedicion') &&
      this.isFieldValid('nombre') &&
      this.isFieldValid('apellidos')
    );
  }
}
