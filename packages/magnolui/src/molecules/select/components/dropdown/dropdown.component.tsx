import { cls } from "@mag/utils/classnames";
import { Children, isValidElement } from "react";
import { useSelectContext } from "../../context";
import type { MagSelectOptionProps } from "../option/option.component";
import "./dropdown.scss";

interface Props {
  children: React.ReactNode;
}

export const SelectDropdown = ({ children }: Props) => {
  const { open } = useSelectContext();

  return (
    <ul
      className={cls("mag-select-options", open && "mag-select-options__open")}
    >
      {Children.map(children, (child) => {
        if (!isValidElement<MagSelectOptionProps>(child)) return null;
        return <li key={child.props.value}>{child}</li>;
      })}
    </ul>
  );
};
