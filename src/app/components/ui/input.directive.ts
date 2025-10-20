import { Directive, Input, computed, signal } from "@angular/core";
import { hlm } from "@spartan-ng/ui-core";
import { ClassValue } from "clsx";

@Directive({
  selector: "[hlmInput]",
  standalone: true,
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmInputDirective {
  private readonly _userCls = signal<ClassValue>("");

  @Input()
  set class(inputs: ClassValue) {
    this._userCls.set(inputs);
  }

  protected _computedClass = computed(() =>
    hlm(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      this._userCls(),
    ),
  );
}
