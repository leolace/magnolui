import { MagIconChevron } from "@mag/icons/chevron";
import { Children, isValidElement, useMemo } from "react";
import { useSelectContext } from "../../context";
import type { Options } from "../../select.types";
import type { MagSelectOptionProps } from "../option/option.component";
import "./trigger.scss";

interface Props {
  children: React.ReactNode;
  placeholder: string;
}

export const SelectTrigger = ({ children, placeholder }: Props) => {
  const { open, toggleOpen, selectedOptionValue } = useSelectContext();

  const options = useMemo(() => {
    const optionsMap: Options = {};
    Children.forEach(children, (child) => {
      if (!isValidElement<MagSelectOptionProps>(child)) return;
      optionsMap[child.props.value] = child.props.children;
    });
    return optionsMap;
  }, [children]);

  const selectedOption = selectedOptionValue && options[selectedOptionValue];
  const hasValue = selectedOptionValue && selectedOption;

  return (
    <div className="mag-select-value" role="button" onClick={toggleOpen}>
      {hasValue ? (
        <p className="mag-select-value__text">{selectedOption}</p>
      ) : (
        <span className="mag-select-value__placeholder">{placeholder}</span>
      )}
      <MagIconChevron direction={open ? "up" : "down"} />
    </div>
  );
};
