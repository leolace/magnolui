import { HTMLAttributes } from "react";

type MagTypes = "primary" | "secondary" | "tertiary";

export type MagElement<T extends HTMLElement> = {
  type?: MagTypes;
} & HTMLAttributes<T>;
