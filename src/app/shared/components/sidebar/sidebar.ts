import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sidebar.html",
  styleUrls: ["./sidebar.css"],
})
export class SidebarComponent {
  @Output() onMenuClick = new EventEmitter<string>();
  @Output() onLogout = new EventEmitter<void>();

  menuActivo: string = "acuerdos";

  menuItems = [
    { id: "acuerdos", icon: "person", tooltip: "Acuerdos de Pago" },
    { id: "configuracion", icon: "settings", tooltip: "Configuración" },
  ];

  onMenuItemClick(menuId: string): void {
    this.menuActivo = menuId;
    this.onMenuClick.emit(menuId);
    console.log("📌 Sidebar - Menú seleccionado:", menuId);
  }

  onLogoutClick(): void {
    console.log("🚪 Logout solicitado");
    this.onLogout.emit();
  }

  isActive(menuId: string): boolean {
    return this.menuActivo === menuId;
  }
}
