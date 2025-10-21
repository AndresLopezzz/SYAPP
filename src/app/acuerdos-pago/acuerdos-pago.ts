import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Infractor, Apoderado, Ubicacion, Cuotas } from "../core/models";

import { AcuerdosService } from "../core/services";

import { HeaderComponent, SidebarComponent } from "../shared/components";

import {
  InfractorFormComponent,
  ApoderadoFormComponent,
  UbicacionFormComponent,
  CuotasConfigComponent,
  ResumenAcuerdoComponent,
  type ResumenData,
} from "../features";

@Component({
  selector: "app-acuerdos-pago",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SidebarComponent,
    InfractorFormComponent,
    ApoderadoFormComponent,
    UbicacionFormComponent,
    CuotasConfigComponent,
    ResumenAcuerdoComponent,
  ],
  templateUrl: "./acuerdos-pago.html",
  styleUrls: ["./acuerdos-pago.css"],
})
export class AcuerdosPagoComponent implements OnInit, OnDestroy {
  constructor(private acuerdosService: AcuerdosService) {}

  infractor: Infractor = {
    numeroDocumento: "",
    ciudadExpedicion: "",
    nombres: "",
    apellidos: "",
  };

  tieneApoderado: boolean = false;

  apoderado: Apoderado = {
    tipoDocumento: "",
    numeroDocumento: "",
    ciudadExpedicion: "",
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    tarjetaProfesional: "",
  };

  ubicacion: Ubicacion = {
    ciudad: "",
    direccion: "",
    telefonoFijo: "",
    celular: "",
    correo: "",
  };

  asignarCuotas: boolean = false;

  cuotas: Cuotas = {
    porcentajePrimera: 0,
    numeroCuotas: 0,
  };

  touchedFields: Set<string> = new Set<string>();

  resumen: ResumenData = {
    numeroAcuerdo: "-",
    valorTotal: 0,
    numeroCuotas: 0,
    comparendos: [],
  };

  currentTimestamp: string = "";
  private timestampInterval?: number;

  ngOnInit(): void {
    this.updateTimestamp();
    this.timestampInterval = window.setInterval(() => {
      this.updateTimestamp();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timestampInterval) {
      clearInterval(this.timestampInterval);
    }
  }

  private updateTimestamp(): void {
    const now = new Date();
    const date = now.toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    this.currentTimestamp = `${date} ${time}`;
  }

  handleInfractorChange(infractor: Infractor): void {
    this.infractor = infractor;
    console.log("Infractor actualizado:", infractor);
  }

  handleInfractorFieldTouched(field: string): void {
    console.log("Campo tocado:", field);
  }

  handleApoderadoChange(apoderado: Apoderado): void {
    this.apoderado = apoderado;
    console.log("Apoderado actualizado:", apoderado);
  }

  handleApoderadoFieldTouched(field: string): void {
    console.log("Campo apoderado tocado:", field);
  }

  handleUbicacionChange(ubicacion: Ubicacion): void {
    this.ubicacion = ubicacion;
    console.log("Ubicación actualizada:", ubicacion);
  }

  handleUbicacionFieldTouched(field: string): void {
    console.log("Campo ubicación tocado:", field);
  }

  handleCuotasChange(cuotas: Cuotas): void {
    this.cuotas = cuotas;
    console.log("Cuotas actualizadas:", cuotas);
  }

  handleAsignarCuotasChange(asignarCuotas: boolean): void {
    this.asignarCuotas = asignarCuotas;
    console.log("Asignar cuotas:", asignarCuotas);
  }

  handleCalcularCuotas(): void {
    this.calcularCuotas();
  }

  markAsTouched(field: string): void {
    this.touchedFields.add(field);
  }

  isTouched(field: string): boolean {
    return this.touchedFields.has(field);
  }

  limpiarFormulario(): void {
    this.infractor = this.acuerdosService.limpiarFormulario("infractor");
    this.apoderado = this.acuerdosService.limpiarFormulario("apoderado");
    this.ubicacion = this.acuerdosService.limpiarFormulario("ubicacion");
    this.cuotas = this.acuerdosService.limpiarFormulario("cuotas");
    this.tieneApoderado = false;
    this.asignarCuotas = false;
    this.touchedFields.clear();
    console.log("Formulario limpiado");
  }

  guardarAcuerdo(): void {
    console.log("Guardando acuerdo...");
    console.log("Infractor:", this.infractor);
    console.log("Apoderado:", this.apoderado);
    console.log("Ubicación:", this.ubicacion);
    console.log("Cuotas:", this.cuotas);

    const numeroAcuerdo = this.acuerdosService.generarNumeroAcuerdo();
    console.log("Número de acuerdo generado:", numeroAcuerdo);

    alert(`Acuerdo guardado!\nNúmero: ${numeroAcuerdo}`);
  }

  calcularCuotas(): void {
    const montoEjemplo = 100000;
    const calculo = this.acuerdosService.calcularTotalCuotas(
      montoEjemplo,
      this.cuotas,
    );

    console.log("Cálculo de cuotas:", calculo);

    alert(
      `Resumen de cuotas:\n\n` +
        `Monto total: ${this.acuerdosService.formatearMoneda(montoEjemplo)}\n` +
        `Primera cuota (${this.cuotas.porcentajePrimera}%): ${this.acuerdosService.formatearMoneda(calculo.primeraCuota)}\n` +
        `Cuotas restantes: ${calculo.totalCuotas - 1} de ${this.acuerdosService.formatearMoneda(calculo.valorCuota)} cada una`,
    );
  }

  handleSidebarClick(menuId: string): void {
    console.log("Sidebar - Menú:", menuId);
  }

  handleLogout(): void {
    if (confirm("¿Cerrar sesión?")) {
      console.log("Cerrando sesión...");
    }
  }
}
