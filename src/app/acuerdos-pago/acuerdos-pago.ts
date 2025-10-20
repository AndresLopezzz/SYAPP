import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-acuerdos-pago",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="layout">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <div class="logo">
            <span class="material-icons">home</span>
          </div>
          <nav class="nav">
            <div class="nav-item">
              <a href="#"
                >Registrar comparendo
                <span class="chevron material-icons">expand_more</span></a
              >
              <div class="dropdown">
                <a href="#" class="dropdown-item">Nuevo comparendo</a>
                <a href="#" class="dropdown-item">Importar comparendos</a>
                <a href="#" class="dropdown-item">Histórico</a>
              </div>
            </div>
            <div class="nav-item">
              <a href="#"
                >Orden pensionero
                <span class="chevron material-icons">expand_more</span></a
              >
              <div class="dropdown">
                <a href="#" class="dropdown-item">Crear orden</a>
                <a href="#" class="dropdown-item">Consultar órdenes</a>
                <a href="#" class="dropdown-item">Reportes</a>
              </div>
            </div>
            <div class="nav-item">
              <a href="#"
                >Estado comparendos
                <span class="chevron material-icons">expand_more</span></a
              >
              <div class="dropdown">
                <a href="#" class="dropdown-item">Consultar estado</a>
                <a href="#" class="dropdown-item">Actualizar estado</a>
                <a href="#" class="dropdown-item">Estadísticas</a>
              </div>
            </div>
            <div class="nav-item">
              <a href="#"
                >Notificaciones
                <span class="chevron material-icons">expand_more</span></a
              >
              <div class="dropdown">
                <a href="#" class="dropdown-item">Ver todas</a>
                <a href="#" class="dropdown-item">Marcar como leídas</a>
                <a href="#" class="dropdown-item">Configuración</a>
              </div>
            </div>
            <div class="nav-item">
              <a href="#"
                >Audiencias
                <span class="chevron material-icons">expand_more</span></a
              >
              <div class="dropdown">
                <a href="#" class="dropdown-item">Programar audiencia</a>
                <a href="#" class="dropdown-item">Calendario</a>
                <a href="#" class="dropdown-item">Actas</a>
              </div>
            </div>
            <div class="nav-item">
              <a href="#"
                >Administración
                <span class="chevron material-icons">expand_more</span></a
              >
              <div class="dropdown">
                <a href="#" class="dropdown-item">Usuarios</a>
                <a href="#" class="dropdown-item">Permisos</a>
                <a href="#" class="dropdown-item">Configuración</a>
                <a href="#" class="dropdown-item">Logs del sistema</a>
              </div>
            </div>
          </nav>
        </div>
        <div class="header-right">
          <span class="icons">
            <img src="lopequeno.png" alt="Logo pequeño" class="header-logo" />
            <img
              src="LogoSecretaria.PNG"
              alt="Logo Secretaría"
              class="header-logo"
            />
          </span>
        </div>
      </header>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-icon active">
          <span class="material-icons">person</span>
        </div>
        <div class="sidebar-icon">
          <span class="material-icons">settings</span>
        </div>
        <div class="sidebar-icon logout">
          <span class="material-icons">logout</span>
        </div>
      </aside>

      <!-- Main Content Container (con esquinas redondeadas) -->
      <main class="main-container">
        <div class="page-header">
          <h1>Acuerdos de pago</h1>
          <span class="timestamp">10/10/2025<br />10:14:39</span>
        </div>

        <div class="actions-top">
          <button class="btn-secondary">← Volver</button>
          <div class="actions-right">
            <button class="btn-outline">
              <span class="material-icons">refresh</span>
              Limpiar formulario
            </button>
            <button class="btn-primary">
              <span class="material-icons">save</span>
              Guardar
            </button>
          </div>
        </div>

        <!-- 1. Información del Infractor -->
        <section class="card">
          <h2>Información del Infractor</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Número de documento <span class="required">*</span></label>
              <input
                type="text"
                [(ngModel)]="infractor.numeroDocumento"
                placeholder="Ingrese número de documento"
                (blur)="markAsTouched('infractor.numeroDocumento')"
                [class.error]="
                  isTouched('infractor.numeroDocumento') &&
                  !infractor.numeroDocumento
                "
              />
              <small
                *ngIf="
                  isTouched('infractor.numeroDocumento') &&
                  !infractor.numeroDocumento
                "
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group">
              <label
                >Ciudad de expedición de Cédula
                <span class="required">*</span></label
              >
              <select
                [(ngModel)]="infractor.ciudadExpedicion"
                (blur)="markAsTouched('infractor.ciudadExpedicion')"
                [class.error]="
                  isTouched('infractor.ciudadExpedicion') &&
                  !infractor.ciudadExpedicion
                "
              >
                <option value="">Selecciona una ciudad</option>
                <option value="bogota">Bogotá</option>
                <option value="medellin">Medellín</option>
              </select>
              <small
                *ngIf="
                  isTouched('infractor.ciudadExpedicion') &&
                  !infractor.ciudadExpedicion
                "
                class="error"
              >
                Debe seleccionar un item de la lista.
              </small>
            </div>
            <div class="form-group">
              <label>Nombres <span class="required">*</span></label>
              <input
                type="text"
                [(ngModel)]="infractor.nombres"
                placeholder="Primer y segundo nombre"
                (blur)="markAsTouched('infractor.nombres')"
                [class.error]="
                  isTouched('infractor.nombres') && !infractor.nombres
                "
              />
              <small
                *ngIf="!isTouched('infractor.nombres') || infractor.nombres"
                >Ingrese ambos nombres separados por espacio.</small
              >
              <small
                *ngIf="isTouched('infractor.nombres') && !infractor.nombres"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group">
              <label>Apellidos <span class="required">*</span></label>
              <input
                type="text"
                [(ngModel)]="infractor.apellidos"
                placeholder="Primer y segundo apellido"
                (blur)="markAsTouched('infractor.apellidos')"
                [class.error]="
                  isTouched('infractor.apellidos') && !infractor.apellidos
                "
              />
              <small
                *ngIf="!isTouched('infractor.apellidos') || infractor.apellidos"
                >Ingrese ambos apellidos separados por espacio.</small
              >
              <small
                *ngIf="isTouched('infractor.apellidos') && !infractor.apellidos"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
          </div>
          <div class="checkbox-group">
            <input
              type="checkbox"
              id="tieneApoderado"
              [(ngModel)]="tieneApoderado"
            />
            <label for="tieneApoderado"
              >Actúa mediante representante legal o apoderado?</label
            >
          </div>
        </section>

        <!-- 2. Información del Apoderado (condicional) -->
        <section class="card" *ngIf="tieneApoderado">
          <h2>Información del Apoderado</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>Tipo de documento <span class="required">*</span></label>
              <select
                [(ngModel)]="apoderado.tipoDocumento"
                (blur)="markAsTouched('apoderado.tipoDocumento')"
                [class.error]="
                  isTouched('apoderado.tipoDocumento') &&
                  !apoderado.tipoDocumento
                "
              >
                <option value="">Selecciona tipo</option>
                <option value="cc">Cédula de Ciudadanía</option>
                <option value="ce">Cédula de Extranjería</option>
              </select>
              <small
                *ngIf="
                  isTouched('apoderado.tipoDocumento') &&
                  !apoderado.tipoDocumento
                "
                class="error"
              >
                Debe seleccionar un item de la lista.
              </small>
            </div>
            <div class="form-group">
              <label>Número de documento <span class="required">*</span></label>
              <input
                type="text"
                [(ngModel)]="apoderado.numeroDocumento"
                placeholder="Ingrese número de documento"
                (blur)="markAsTouched('apoderado.numeroDocumento')"
                [class.error]="
                  isTouched('apoderado.numeroDocumento') &&
                  !apoderado.numeroDocumento
                "
              />
              <small
                *ngIf="
                  isTouched('apoderado.numeroDocumento') &&
                  !apoderado.numeroDocumento
                "
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group">
              <label
                >Ciudad de expedición de Cédula
                <span class="required">*</span></label
              >
              <select
                [(ngModel)]="apoderado.ciudadExpedicion"
                (blur)="markAsTouched('apoderado.ciudadExpedicion')"
                [class.error]="
                  isTouched('apoderado.ciudadExpedicion') &&
                  !apoderado.ciudadExpedicion
                "
              >
                <option value="">Selecciona una ciudad</option>
                <option value="bogota">Bogotá</option>
                <option value="medellin">Medellín</option>
              </select>
              <small
                *ngIf="
                  isTouched('apoderado.ciudadExpedicion') &&
                  !apoderado.ciudadExpedicion
                "
                class="error"
              >
                Debe seleccionar un item de la lista.
              </small>
            </div>
            <div class="form-group">
              <label>Nombre <span class="required">*</span></label>
              <input
                type="text"
                [(ngModel)]="apoderado.nombre"
                placeholder="Primer y segundo nombre"
                (blur)="markAsTouched('apoderado.nombre')"
                [class.error]="
                  isTouched('apoderado.nombre') && !apoderado.nombre
                "
              />
              <small *ngIf="!isTouched('apoderado.nombre') || apoderado.nombre"
                >Ingrese ambos nombres separados por espacio.</small
              >
              <small
                *ngIf="isTouched('apoderado.nombre') && !apoderado.nombre"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group">
              <label>Apellidos <span class="required">*</span></label>
              <input
                type="text"
                [(ngModel)]="apoderado.apellidos"
                placeholder="Primer y segundo apellido"
                (blur)="markAsTouched('apoderado.apellidos')"
                [class.error]="
                  isTouched('apoderado.apellidos') && !apoderado.apellidos
                "
              />
              <small
                *ngIf="!isTouched('apoderado.apellidos') || apoderado.apellidos"
                >Ingrese ambos apellidos separados por espacio.</small
              >
              <small
                *ngIf="isTouched('apoderado.apellidos') && !apoderado.apellidos"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group">
              <label>Fecha de nacimiento</label>
              <input
                type="date"
                [(ngModel)]="apoderado.fechaNacimiento"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div class="form-group full-width">
              <label>Número de tarjeta profesional</label>
              <input
                type="text"
                [(ngModel)]="apoderado.tarjetaProfesional"
                placeholder="Ingrese número de tarjeta profesional"
              />
              <small>Solo si aplica (Abogados, contadores, etc.)</small>
            </div>
          </div>
        </section>

        <!-- 3. Datos de Ubicación -->
        <section class="card">
          <h2>Datos de Ubicación persona acuerdo</h2>
          <div class="form-grid">
            <div class="form-group">
              <label
                >Ciudad de residencia <span class="required">*</span></label
              >
              <select
                [(ngModel)]="ubicacion.ciudad"
                (blur)="markAsTouched('ubicacion.ciudad')"
                [class.error]="
                  isTouched('ubicacion.ciudad') && !ubicacion.ciudad
                "
              >
                <option value="">Selecciona ciudad</option>
                <option value="ipiales">Ipiales</option>
              </select>
              <small
                *ngIf="isTouched('ubicacion.ciudad') && !ubicacion.ciudad"
                class="error"
              >
                Debe seleccionar un item de la lista.
              </small>
            </div>
            <div class="form-group">
              <label
                >Dirección de Residencia <span class="required">*</span></label
              >
              <input
                type="text"
                [(ngModel)]="ubicacion.direccion"
                placeholder="Calle, carrera, número, etc."
                (blur)="markAsTouched('ubicacion.direccion')"
                [class.error]="
                  isTouched('ubicacion.direccion') && !ubicacion.direccion
                "
              />
              <small
                *ngIf="isTouched('ubicacion.direccion') && !ubicacion.direccion"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group">
              <label>Teléfono Fijo</label>
              <input
                type="tel"
                [(ngModel)]="ubicacion.telefonoFijo"
                placeholder="Ej: 6040560"
              />
            </div>
            <div class="form-group">
              <label>Celular <span class="required">*</span></label>
              <input
                type="tel"
                [(ngModel)]="ubicacion.celular"
                placeholder="Ej: 3443574319"
                (blur)="markAsTouched('ubicacion.celular')"
                [class.error]="
                  isTouched('ubicacion.celular') && !ubicacion.celular
                "
              />
              <small
                *ngIf="isTouched('ubicacion.celular') && !ubicacion.celular"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
            <div class="form-group full-width">
              <label>Correo <span class="required">*</span></label>
              <input
                type="email"
                [(ngModel)]="ubicacion.correo"
                placeholder="Ejemplo&#64;correo.com"
                (blur)="markAsTouched('ubicacion.correo')"
                [class.error]="
                  isTouched('ubicacion.correo') && !ubicacion.correo
                "
              />
              <small
                *ngIf="isTouched('ubicacion.correo') && !ubicacion.correo"
                class="error"
              >
                Este campo es obligatorio
              </small>
            </div>
          </div>
        </section>

        <!-- 4. Documentos Adjuntos -->
        <section class="card">
          <h2>Documentos Adjuntos</h2>
          <p class="section-subtitle">
            Completa los datos de representarte legal o apoderado
          </p>
          <div class="upload-grid">
            <div class="upload-group">
              <label>Documento Infractor <span class="required">*</span></label>
              <div class="file-input">
                <button class="btn-file">Choose File</button>
                <span>No file chosen</span>
              </div>
            </div>
            <div class="upload-group">
              <label>Documento Apoderado *</label>
              <div class="file-input">
                <button class="btn-file">Choose File</button>
                <span>No file chosen</span>
              </div>
            </div>
            <div class="upload-group">
              <label>Carta de Autorización *</label>
              <div class="file-input">
                <button class="btn-file">Choose File</button>
                <span>No file chosen</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. Infracciones de Tránsito -->
        <section class="card">
          <h2>Infracciones de Tránsito Pendientes de Pago</h2>
          <p class="section-subtitle">
            Selecciona las infracciones que desee incluir en el acuerdo de pago
          </p>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>N° Comparendo</th>
                  <th>Fecha Infracción</th>
                  <th>Placa</th>
                  <th>Código</th>
                  <th>N° Resolución</th>
                  <th>Fecha Resolución</th>
                  <th>Valor</th>
                  <th>Interés Mora</th>
                  <th>Valor Sist.</th>
                  <th>Valor Costas</th>
                  <th>Valor a Cancelar</th>
                  <th>Estado</th>
                </tr>
                <tr class="filter-row">
                  <th>
                    <input
                      type="text"
                      class="table-filter-input"
                      placeholder="Buscar..."
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      class="table-filter-input"
                      placeholder="Buscar..."
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      class="table-filter-input"
                      placeholder="Buscar..."
                    />
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="12" class="no-data">
                    <div class="empty-state">
                      <span class="material-icons">warning</span>
                      <p>No se encontraron resultados</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pagination">0 de 0</div>
        </section>

        <!-- 6. Detalles del acuerdo de pago -->
        <section class="card">
          <h2>Detalles del acuerdo de pago</h2>
          <p class="section-subtitle">
            Configure las cuotas y revise el resumen del acuerdo
          </p>

          <div class="checkbox-group">
            <input
              type="checkbox"
              id="asignarCuotas"
              [(ngModel)]="asignarCuotas"
            />
            <label for="asignarCuotas"
              >Desea asignar cuotas al acuerdo de pago?</label
            >
          </div>

          <div class="configuracion-cuotas" *ngIf="asignarCuotas">
            <h3>Configuración de Cuotas</h3>
            <div class="cuotas-grid">
              <div class="form-group">
                <label
                  >Porcentaje primera cuota
                  <span class="required">*</span></label
                >
                <div class="input-with-suffix">
                  <input
                    type="number"
                    [(ngModel)]="cuotas.porcentajePrimera"
                    placeholder="0"
                  />
                  <span class="suffix">%</span>
                </div>
                <small>Porcentaje del total para la primera cuota.</small>
              </div>
              <div class="form-group">
                <label>Número de cuotas <span class="required">*</span></label>
                <input
                  type="number"
                  [(ngModel)]="cuotas.numeroCuotas"
                  placeholder=""
                />
                <small>Cantidad total de cuotas a generar.</small>
              </div>
              <div class="form-group">
                <label>Acción</label>
                <button class="btn-primary full-width">
                  Prorrealizar Cuotas
                </button>
                <a href="#" class="link-small">Ver simulación de pagos</a>
              </div>
            </div>
          </div>

          <!-- Resumen del Acuerdo -->
          <div class="resumen-acuerdo">
            <h3>RESUMEN DEL ACUERDO</h3>
            <div class="resumen-content">
              <p><strong>N° Acuerdo de pago:</strong> -</p>
              <p><strong>Valor total de acuerdo:</strong> 0$</p>
              <p><strong>Número de cuotas:</strong> 0</p>
            </div>
          </div>

          <!-- Comparendos incluidos -->
          <div class="comparendos-incluidos">
            <h3>Comparendos incluidos en el acuerdo</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>N° comparendo</th>
                  <th>Valor A Pagar</th>
                  <th>Valor SIMIT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3" class="no-data">
                    <div class="empty-state">
                      <span class="material-icons">warning</span>
                      <p>No se han agregado comparendos al acuerdo</p>
                      <p>Busque y agregue comparendos para continuar</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="table-footer">
              <span><strong>Valor total:</strong></span>
              <span>$0</span>
              <span>$0</span>
            </div>
          </div>
        </section>

        <!-- Botones finales -->
        <div class="actions-bottom">
          <button class="btn-secondary">← Volver</button>
          <div class="actions-right">
            <button class="btn-outline">
              <span class="material-icons">refresh</span>
              Limpiar formulario
            </button>
            <button class="btn-primary">
              <span class="material-icons">save</span>
              Guardar
            </button>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        --Green-8-2: rgba(99, 133, 1, 0.73);
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:
          "Inter",
          system-ui,
          -apple-system,
          sans-serif;

        color: #222;
      }

      .material-icons {
        font-family: "Material Icons";
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
      }

      .layout {
        min-height: 100vh;
        background: #blue;
        position: relative;
      }

      /* HEADER */
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        z-index: 100;
      }

      .header-left {
        display: flex;
        align-items: center;
      }

      .logo {
        display: flex;
        width: 38px;
        height: 38px;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 6px;
        border: 1px solid var(--Green-8-2);
        background: var(--Green-8-2);
        cursor: pointer;
      }

      .logo .material-icons {
        font-size: 22px;
        color: white;
      }

      .nav {
        display: flex;
        gap: 20px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      .nav-item {
        position: relative;
      }

      .nav-item > a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        position: relative;
        padding: 8px 0;
      }

      .nav-item > a .chevron {
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .nav-item:hover > a .chevron {
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        min-width: 200px;
        padding: 8px 0;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        z-index: 1000;
      }

      .nav-item:hover .dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .dropdown-item {
        display: block;
        padding: 10px 16px;
        color: #333;
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        transition: background 0.2s ease;
      }

      .dropdown-item:hover {
        background: #f8f9fa;
        color: var(--Green-8-2);
      }

      .header-right .icons {
        display: flex;
        gap: 15px;
        align-items: center;
      }

      .header-logo {
        height: 40px;
        width: auto;
        object-fit: contain;
        cursor: pointer;
        transition: opacity 0.2s;
      }

      .header-logo:hover {
        opacity: 0.8;
      }

      .material-icons {
        user-select: none;
      }

      /* SIDEBAR */
      .sidebar {
        position: fixed;
        left: 0;
        top: 60px;
        width: 60px;
        height: calc(100vh - 60px);
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        z-index: 99;
      }

      .sidebar-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        cursor: pointer;
        transition: background 0.2s;
      }

      .sidebar-icon .material-icons {
        font-size: 24px;
        color: #000;
      }

      .sidebar-icon.active {
        background: var(--Green-8-2);
      }

      .sidebar-icon.active .material-icons {
        color: white;
      }

      .sidebar-icon:hover {
        background: #f0f0f0;
      }

      .sidebar-icon.active:hover {
        background: var(--Green-8-2);
      }

      .sidebar-icon.logout .material-icons {
        color: #ff0000;
      }

      .sidebar-icon.logout:hover {
        background: #ffe5e5;
      }

      /* MAIN CONTAINER (con esquinas redondeadas) */
      .main-container {
        margin-left: 60px;
        margin-top: 60px;
        border-radius: 22px;
        background: #f8f5ee;
        border-radius: 20px 0 0 0;
        min-height: calc(100vh - 60px);
        padding: 30px;
        overflow-y: auto;
      }

      .page-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
      }

      .page-header h1 {
        font-size: 28px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }

      .subtitle {
        color: #666;
        font-size: 14px;
      }

      .timestamp {
        text-align: right;
        font-size: 14px;
        color: #666;
      }

      /* ACTIONS */
      .actions-top,
      .actions-bottom {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .actions-bottom {
        margin-top: 30px;
        margin-bottom: 0;
      }

      .actions-right {
        display: flex;
        gap: 10px;
      }

      /* BUTTONS */
      .btn-primary {
        background: var(--Green-8-2);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 40px;
        min-height: 40px;
        font-weight: 500;
        white-space: nowrap;
      }

      .btn-primary .material-icons {
        font-size: 18px;
        color: white;
      }

      .btn-secondary {
        background: #f8f5ee;
        color: #334155;
        border: 1px solid #334155;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 40px;
        min-height: 40px;
        font-weight: 500;
        white-space: nowrap;
      }

      .btn-secondary .material-icons {
        font-size: 18px;
        color: #334155;
      }

      .btn-outline {
        background: white;
        color: #334155;
        border: 1px solid #e2e8f0;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 40px;
        min-height: 40px;
        font-weight: 500;
        white-space: nowrap;
      }

      .btn-outline .material-icons {
        font-size: 18px;
        color: #334155;
      }

      .btn-file {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
      }

      .full-width {
        width: 100%;
      }

      /* CARDS */
      .card {
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 20px;
      }

      .card h2 {
        font-size: 18px;
        color: #333;
        margin-bottom: 15px;
        font-weight: 600;
      }

      .card h3 {
        font-size: 16px;
        color: #333;
        margin-bottom: 15px;
        font-weight: 600;
      }

      .section-subtitle {
        font-size: 13px;
        color: #666;
        margin-bottom: 20px;
      }

      /* FORMS */
      .form-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 15px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      .form-group.full-width {
        grid-column: 1 / -1;
      }

      .form-group label {
        font-size: 13px;
        color: #333;
        margin-bottom: 6px;
        font-weight: 500;
      }

      .form-group label .required {
        color: #ff0000;
        margin-left: 2px;
      }

      .form-group input,
      .form-group select {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 14px;
        background: white;
        height: 40px;
      }

      .form-group input:focus,
      .form-group select:focus {
        outline: none;
        border-color: #8bc34a;
      }

      .form-group small {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
      }

      .form-group small.error {
        color: #ff0000;
      }

      .form-group input.error,
      .form-group select.error {
        border-color: #ff0000;
      }

      .form-group input.error:focus,
      .form-group select.error:focus {
        border-color: #ff0000;
        outline: none;
      }

      .checkbox-group {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
      }

      .checkbox-group input[type="checkbox"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
        accent-color: var(--Green-8-2);
      }

      .checkbox-group label {
        font-size: 14px;
        color: #333;
        cursor: pointer;
      }

      /* UPLOADS */
      .upload-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .upload-group {
        display: flex;
        flex-direction: column;
      }

      .upload-group label {
        font-size: 13px;
        color: #333;
        margin-bottom: 8px;
        font-weight: 500;
      }

      .file-input {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: white;
      }

      .file-input span {
        font-size: 13px;
        color: #999;
      }

      /* TABLE */
      .table-container {
        overflow-x: auto;
        margin: 20px 0;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        background: white;
      }

      .data-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
      }

      .data-table thead {
        background: transparent;
      }

      .data-table thead tr:first-child {
        background: #f1eee7;
      }

      .data-table th {
        padding: 14px 12px;
        text-align: left;
        font-weight: 600;
        color: #333;
        border-bottom: 2px solid #e0e0e0;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .data-table td {
        padding: 14px 12px;
        border-bottom: 1px solid #f0f0f0;
        color: #555;
      }

      .data-table tbody tr:hover {
        background: #f9fafb;
      }

      .data-table tbody tr:last-child td {
        border-bottom: none;
      }

      .no-data {
        text-align: center;
        background: white;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        color: #999;
        font-size: 14px;
        line-height: 1.6;
        gap: 12px;
      }

      .empty-state .material-icons {
        font-size: 48px;
        color: #fbbf24;
      }

      .empty-state p {
        margin: 0;
        color: #666;
      }

      .empty-state p:first-of-type {
        font-weight: 500;
        color: #333;
      }

      .pagination {
        text-align: center;
        font-size: 13px;
        color: #666;
        margin-top: 15px;
        padding: 10px;
        background: #f1eee7;
        border-radius: 6px;
        font-weight: 500;
      }

      /* TABLE FILTER INPUTS */
      .filter-row {
        background: #f8f5ee !important;
      }

      .filter-row th {
        padding: 8px 12px;
        border-bottom: 1px solid #e0e0e0;
      }

      .table-filter-input {
        width: 100%;
        padding: 6px 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 12px;
        background: white;
        height: 32px;
      }

      .table-filter-input:focus {
        outline: none;
        border-color: var(--Green-8-2);
      }

      .table-filter-input::placeholder {
        color: #999;
        font-size: 11px;
      }

      /* CONFIGURACIÓN DE CUOTAS */
      .configuracion-cuotas {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      }

      .cuotas-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 15px;
      }

      .input-with-suffix {
        position: relative;
      }

      .input-with-suffix input {
        width: 100%;
        padding-right: 35px;
      }

      .suffix {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        font-size: 14px;
      }

      .link-small {
        display: block;
        margin-top: 8px;
        font-size: 12px;
        color: #2196f3;
        text-decoration: none;
      }

      /* RESUMEN DEL ACUERDO */
      .resumen-acuerdo {
        background: #fff9e6;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
        border: 1px solid #ffe082;
      }

      .resumen-acuerdo h3 {
        text-align: center;
        color: #333;
        margin-bottom: 15px;
      }

      .resumen-content p {
        margin: 8px 0;
        font-size: 14px;
        color: #333;
      }

      /* COMPARENDOS INCLUIDOS */
      .comparendos-incluidos {
        margin-top: 30px;
      }

      .table-footer {
        display: flex;
        justify-content: space-between;
        padding: 15px 8px;
        background: #f5f5f5;
        border-radius: 0 0 8px 8px;
        font-size: 14px;
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .form-grid,
        .upload-grid,
        .cuotas-grid {
          grid-template-columns: 1fr;
        }

        .main-container {
          margin-left: 0;
          border-radius: 0;
        }

        .sidebar {
          display: none;
        }
      }
    `,
  ],
})
export class AcuerdosPagoComponent {
  // Infractor
  infractor = {
    numeroDocumento: "",
    ciudadExpedicion: "",
    nombres: "",
    apellidos: "",
  };

  // Control de apoderado
  tieneApoderado = false;

  // Apoderado
  apoderado = {
    tipoDocumento: "",
    numeroDocumento: "",
    ciudadExpedicion: "",
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    tarjetaProfesional: "",
  };

  // Ubicación
  ubicacion = {
    ciudad: "",
    direccion: "",
    telefonoFijo: "",
    celular: "",
    correo: "",
  };

  // Control de cuotas
  asignarCuotas = false;

  // Cuotas
  cuotas = {
    porcentajePrimera: 0,
    numeroCuotas: 0,
  };

  // Tracking de campos tocados
  touchedFields = new Set<string>();

  markAsTouched(field: string) {
    this.touchedFields.add(field);
  }

  isTouched(field: string): boolean {
    return this.touchedFields.has(field);
  }
}
