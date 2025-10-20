import { Directive, Input, computed, signal } from "@angular/core";
import { hlm } from "@spartan-ng/ui-core";
import { ClassValue } from "clsx";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex justify-center items-center gap-[10px] py-2 px-4 rounded-[6px] text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(99,133,1,0.73)] text-white hover:bg-[rgba(99,133,1,0.85)] border-0",
        secondary:
          "bg-[#F8F5EE] text-[#334155] border border-[#334155] hover:bg-[#F0EDE3]",
        outline:
          "bg-white text-[#334155] border border-[#E2E8F0] hover:bg-gray-50",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-3 text-xs",
        lg: "py-3 px-6 text-base",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: "[hlmBtn]",
  standalone: true,
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmButtonDirective {
  private readonly _userCls = signal<ClassValue>("");
  @Input()
  set class(inputs: ClassValue) {
    this._userCls.set(inputs);
  }

  private readonly _variant = signal<ButtonVariants["variant"]>("default");
  @Input()
  set variant(variant: ButtonVariants["variant"]) {
    this._variant.set(variant);
  }

  private readonly _size = signal<ButtonVariants["size"]>("default");
  @Input()
  set size(size: ButtonVariants["size"]) {
    this._size.set(size);
  }

  protected _computedClass = computed(() =>
    hlm(
      buttonVariants({ variant: this._variant(), size: this._size() }),
      this._userCls(),
    ),
  );
}
