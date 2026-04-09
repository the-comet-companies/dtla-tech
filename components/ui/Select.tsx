"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
  HTMLButtonElement,
  SelectPrimitive.SelectTriggerProps & { className?: string }
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={`flex h-12 w-full items-center justify-between rounded-md border border-[var(--structural-border)] bg-[var(--bg-card)] px-4 text-[0.9375rem] text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--brand)] focus:shadow-[var(--shadow-focus)] transition-all duration-200 cursor-pointer data-[placeholder]:text-[var(--text-muted)] ${className}`}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <svg className="w-4 h-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectContentProps & { className?: string }
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={`relative z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-[var(--structural-border)] bg-[var(--bg-card)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 ${className}`}
      position="popper"
      sideOffset={6}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1.5 max-h-[280px]">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectItem = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps & { className?: string }
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`relative flex w-full cursor-pointer select-none items-center rounded-md py-2.5 px-3 text-[0.875rem] text-[var(--text)] outline-none transition-colors duration-150 hover:bg-black/[0.04] focus:bg-black/[0.04] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute right-2">
      <svg className="w-4 h-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
