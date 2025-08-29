import type { MagElement } from "@mag/index";
import { cls } from "@mag/utils/classnames";
import { useSelectContext } from "../../context";
import "./option.scss";

export interface MagSelectOptionProps extends MagElement<"option"> {
  children: string;
  value: string;
  disabled?: boolean;
}

export const MagSelectOption = ({
  children,
  value,
  disabled,
}: MagSelectOptionProps) => {
  const { setSelectedOptionValue, selectedOptionValue, toggleOpen } =
    useSelectContext();

  const handleClick = () => {
    setSelectedOptionValue(value);
    toggleOpen();
  };

  return (
    <option
      value={value}
      disabled={disabled}
      onClick={handleClick}
      className={cls(
        "mag-select-option",
        selectedOptionValue === value && "mag-select-option__selected",
        disabled && "mag-select-option__disabled",
      )}
    >
      {children}
    </option>
  );
};
