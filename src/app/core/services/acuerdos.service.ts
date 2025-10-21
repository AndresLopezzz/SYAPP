import { Injectable } from "@angular/core";
import { Infractor, Apoderado, Ubicacion, Cuotas } from "../models";

@Injectable({
  providedIn: "root",
})
export class AcuerdosService {
  constructor() {}

  limpiarFormulario(
    tipo: "infractor" | "apoderado" | "ubicacion" | "cuotas",
  ): any {
    switch (tipo) {
      case "infractor":
        return {
          numeroDocumento: "",
          ciudadExpedicion: "",
          nombres: "",
          apellidos: "",
        } as Infractor;

      case "apoderado":
        return {
          tipoDocumento: "",
          numeroDocumento: "",
          ciudadExpedicion: "",
          nombre: "",
          apellidos: "",
          fechaNacimiento: "",
          tarjetaProfesional: "",
        } as Apoderado;

      case "ubicacion":
        return {
          ciudad: "",
          direccion: "",
          telefonoFijo: "",
          celular: "",
          correo: "",
        } as Ubicacion;

      case "cuotas":
        return {
          porcentajePrimera: 0,
          numeroCuotas: 0,
        } as Cuotas;

      default:
        return {};
    }
  }

  validarCampo(valor: any): boolean {
    if (valor === null || valor === undefined) {
      return false;
    }

    if (typeof valor === "string") {
      return valor.trim().length > 0;
    }

    return true;
  }

  calcularTotalCuotas(
    montoTotal: number,
    cuotas: Cuotas,
  ): {
    primeraCuota: number;
    montoPendiente: number;
    valorCuota: number;
    totalCuotas: number;
  } {
    const primeraCuota = montoTotal * (cuotas.porcentajePrimera / 100);
    const montoPendiente = montoTotal - primeraCuota;
    const valorCuota =
      cuotas.numeroCuotas > 0 ? montoPendiente / cuotas.numeroCuotas : 0;
    const totalCuotas =
      cuotas.numeroCuotas + (cuotas.porcentajePrimera > 0 ? 1 : 0);

    return {
      primeraCuota: Math.round(primeraCuota),
      montoPendiente: Math.round(montoPendiente),
      valorCuota: Math.round(valorCuota),
      totalCuotas,
    };
  }

  generarNumeroAcuerdo(): string {
    const numero = Math.floor(Math.random() * 999) + 1;
    const año = new Date().getFullYear();
    const numeroFormateado = numero.toString().padStart(3, "0");
    return `AP${numeroFormateado}-${año}`;
  }

  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(valor);
  }
}
