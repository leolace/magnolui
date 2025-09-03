import { createContext } from "react";
import type { Options } from "../select.types";

export interface SelectContextProps {
  selectedOptionValue?: string;
  setSelectedOptionValue: (value: string) => void;
  open: boolean;
  toggleOpen: () => void;
  setOptions: (options: Options) => void;
  options: Options;
  setOpen: (open: boolean) => void;
}

export const SelectContext = createContext<SelectContextProps>(
  {} as SelectContextProps,
);
