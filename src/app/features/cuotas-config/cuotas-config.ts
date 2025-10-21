import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cuotas } from '../../core/models';

@Component({
  selector: 'app-cuotas-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuotas-config.html',
  styleUrls: ['./cuotas-config.css']
})
export class CuotasConfigComponent {
  @Input() cuotas!: Cuotas;
  @Input() asignarCuotas: boolean = false;
  @Output() onCuotasChange = new EventEmitter<Cuotas>();
  @Output() onCalcularCuotas = new EventEmitter<void>();
  @Output() onAsignarCuotasChange = new EventEmitter<boolean>();

  onInputChange(): void {
    this.onCuotasChange.emit(this.cuotas);
  }

  onCheckboxChange(): void {
    this.onAsignarCuotasChange.emit(this.asignarCuotas);
  }

  calcularCuotas(): void {
    this.onCalcularCuotas.emit();
  }

  isFormValid(): boolean {
    return (
      this.cuotas.porcentajePrimera >= 0 &&
      this.cuotas.porcentajePrimera <= 100 &&
      this.cuotas.numeroCuotas > 0
    );
  }
}
