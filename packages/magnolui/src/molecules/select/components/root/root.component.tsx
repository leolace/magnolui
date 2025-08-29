import { useOutsideClick } from "@mag/hooks/outside-click";
import type { MagElement } from "@mag/types";
import { cls } from "@mag/utils/classnames";
import { useEffect, useRef, type PropsWithChildren } from "react";
import { useSelectContext } from "../../context";
import { SelectDropdown } from "../dropdown/dropdown.component";
import { SelectTrigger } from "../trigger/trigger.component";
import "./root.scss";

export interface SelectRootProps extends Omit<MagElement<"div">, "onChange"> {
  name?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const SelectRoot = ({
  children,
  placeholder,
  id,
  name,
  className,
  onChange,
  ...props
}: PropsWithChildren<SelectRootProps>) => {
  const { selectedOptionValue, setOpen } = useSelectContext();
  const rootRef = useRef<HTMLDivElement>(null);

  useOutsideClick(rootRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    if (onChange && selectedOptionValue) onChange(selectedOptionValue);
  }, [onChange, selectedOptionValue]);

  return (
    <div className={cls("mag-select-wrapper", className)} {...props}>
      <div className="mag-select" role="input" ref={rootRef}>
        <SelectTrigger children={children} placeholder={placeholder} />
        <SelectDropdown>{children}</SelectDropdown>
      </div>

      <select
        value={selectedOptionValue}
        id={id}
        name={name}
        onChange={() => {}}
        hidden
      >
        {children}
      </select>
    </div>
  );
};
