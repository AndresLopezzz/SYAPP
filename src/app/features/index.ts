// ============================================================
// BARREL EXPORT - COMPONENTES DE FEATURES
// ============================================================
// Exporta todos los componentes de features desde un solo lugar
// para facilitar las importaciones en otros archivos.
//
// Uso:
// import { InfractorFormComponent, ApoderadoFormComponent } from '@app/features';
// ============================================================

export * from "./infractor-form/infractor-form";
export * from "./apoderado-form/apoderado-form";
export * from "./ubicacion-form/ubicacion-form";
export * from "./cuotas-config/cuotas-config";
export * from "./resumen-acuerdo/resumen-acuerdo";
export type {
  ResumenData,
  ComparendoResumen,
} from "./resumen-acuerdo/resumen-acuerdo";
