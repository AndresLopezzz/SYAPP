import { Directive, Input, computed, signal } from "@angular/core";
import { hlm } from "@spartan-ng/ui-core";
import { ClassValue } from "clsx";
import { cva, VariantProps } from "class-variance-authority";

export const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

export type LabelVariants = VariantProps<typeof labelVariants>;

@Directive({
  selector: "[hlmLabel]",
  standalone: true,
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmLabelDirective {
  private readonly _userCls = signal<ClassValue>("");

  @Input()
  set class(inputs: ClassValue) {
    this._userCls.set(inputs);
  }

  protected _computedClass = computed(() =>
    hlm(labelVariants(), this._userCls()),
  );
}
