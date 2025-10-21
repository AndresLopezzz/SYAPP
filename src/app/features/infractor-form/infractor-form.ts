import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Infractor } from "../../core/models";

@Component({
  selector: "app-infractor-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./infractor-form.html",
  styleUrls: ["./infractor-form.css"],
})
export class InfractorFormComponent {
  @Input() infractor!: Infractor;
  @Output() onInfractorChange = new EventEmitter<Infractor>();
  @Output() onFieldTouched = new EventEmitter<string>();

  touchedFields: Set<string> = new Set<string>();

  onInputChange(): void {
    this.onInfractorChange.emit(this.infractor);
  }

  markAsTouched(field: string): void {
    this.touchedFields.add(field);
    this.onFieldTouched.emit(field);
  }

  isTouched(field: string): boolean {
    return this.touchedFields.has(field);
  }

  isFieldValid(field: keyof Infractor): boolean {
    const value = this.infractor[field];
    return value !== null && value !== undefined && value.trim().length > 0;
  }

  isFormValid(): boolean {
    return (
      this.isFieldValid("numeroDocumento") &&
      this.isFieldValid("ciudadExpedicion") &&
      this.isFieldValid("nombres") &&
      this.isFieldValid("apellidos")
    );
  }
}
