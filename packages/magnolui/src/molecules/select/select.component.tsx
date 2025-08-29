import type { ReactNode } from "react";
import {
  SelectRoot,
  type SelectRootProps,
} from "./components/root/root.component";
import { SelectProvider } from "./context/provider";

interface Props extends SelectRootProps {
  children: ReactNode;
  value?: string;
  id: string;
  name: string;
}

export const MagSelect = ({ children, value, ...props }: Props) => {
  return (
    <SelectProvider value={value}>
      <SelectRoot {...props}>{children}</SelectRoot>
    </SelectProvider>
  );
};
