import type { ComponentPropsWithRef } from "react";

export type MagElement<T extends keyof HTMLElementTagNameMap> =
  ComponentPropsWithRef<T>;

export type MagSizes = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
