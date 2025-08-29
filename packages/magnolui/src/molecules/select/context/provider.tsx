import { useState, type ReactNode } from "react";
import type { Options } from "../select.types";
import { SelectContext } from "./context";

interface Props {
  value?: string;
  children: ReactNode;
}

export const SelectProvider = ({ children, value }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState<
    string | undefined
  >(value);
  const [options, setOptions] = useState<Options>({});

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <SelectContext.Provider
      value={{
        selectedOptionValue,
        setSelectedOptionValue,
        open,
        setOpen,
        toggleOpen,
        setOptions,
        options,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};
