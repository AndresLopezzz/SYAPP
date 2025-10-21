import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ComparendoResumen {
  numeroComparendo: string;
  valorPagar: number;
  valorSimit: number;
}

export interface ResumenData {
  numeroAcuerdo: string;
  valorTotal: number;
  numeroCuotas: number;
  comparendos: ComparendoResumen[];
}

@Component({
  selector: 'app-resumen-acuerdo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-acuerdo.html',
  styleUrls: ['./resumen-acuerdo.css']
})
export class ResumenAcuerdoComponent {
  @Input() resumen: ResumenData = {
    numeroAcuerdo: '-',
    valorTotal: 0,
    numeroCuotas: 0,
    comparendos: []
  };

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  }

  getTotalValorPagar(): number {
    return this.resumen.comparendos.reduce((sum, c) => sum + c.valorPagar, 0);
  }

  getTotalValorSimit(): number {
    return this.resumen.comparendos.reduce((sum, c) => sum + c.valorSimit, 0);
  }

  hasComparendos(): boolean {
    return this.resumen.comparendos.length > 0;
  }
}
