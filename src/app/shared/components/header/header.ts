import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.html",
  styleUrls: ["./header.css"],
})
export class HeaderComponent {
  menusAbiertos: { [key: string]: boolean } = {
    comparendos: false,
    ordenPensionero: false,
    estadoComparendos: false,
    notificaciones: false,
    audiencias: false,
    administracion: false,
  };

  toggleMenu(menu: string): void {
    Object.keys(this.menusAbiertos).forEach((key) => {
      if (key !== menu) {
        this.menusAbiertos[key] = false;
      }
    });

    this.menusAbiertos[menu] = !this.menusAbiertos[menu];
  }

  cerrarTodosLosMenus(): void {
    Object.keys(this.menusAbiertos).forEach((key) => {
      this.menusAbiertos[key] = false;
    });
  }

  onMenuItemClick(item: string): void {
    console.log("📌 Menú seleccionado:", item);
    this.cerrarTodosLosMenus();
  }

  onLogoClick(): void {
    console.log("🏠 Click en logo - Ir a inicio");
  }
}
