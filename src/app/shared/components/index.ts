// ============================================================
// BARREL EXPORT - COMPONENTES COMPARTIDOS
// ============================================================
// Este archivo re-exporta todos los componentes compartidos desde un solo lugar.
//
// VENTAJA:
// En vez de:
//   import { HeaderComponent } from '../shared/components/header/header';
//   import { SidebarComponent } from '../shared/components/sidebar/sidebar';
//
// Puedes hacer:
//   import { HeaderComponent, SidebarComponent } from '../shared/components';
//
// Más limpio y fácil de mantener.
// ============================================================

/**
 * Re-exporta el componente Header
 * Componente de la barra superior con navegación
 */
export * from './header/header';

/**
 * Re-exporta el componente Sidebar
 * Componente de la barra lateral con navegación
 */
export * from './sidebar/sidebar';

// ============================================================
// CÓMO AGREGAR MÁS COMPONENTES:
//
// Cuando crees nuevos componentes compartidos, solo agrégalos aquí:
// export * from './footer/footer';
// export * from './modal/modal';
// export * from './button/button';
// etc.
// ============================================================
