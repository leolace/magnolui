import type { MagElement } from "@mag/types";
import { cls } from "@mag/utils/classnames";
import { MagLabel } from "../label/label.component";
import "./text-field.scss";

interface Props extends MagElement<"input"> {
  id: string;
  name: string;
  description?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  required?: boolean;
  errorMessage?: string;
}

export const MagTextField = ({
  id,
  name,
  label,
  description,
  className,
  disabled,
  required,
  errorMessage,
  ...props
}: Props) => {
  return (
    <div
      className={cls(
        "mag-text-field",
        required && "mag-text-field__required",
        className,
      )}
      data-disabled={disabled}
    >
      {label && (
        <MagLabel
          htmlFor={id}
          className={cls(required && "mag-text-field__label-required")}
        >
          {label}
        </MagLabel>
      )}
      <input
        id={id}
        name={name}
        className={cls("mag-text-field__input", className)}
        disabled={disabled}
        required={required}
        data-testid="mag-text-field"
        {...props}
      />
      {description && (
        <small className="mag-text-field__description">{description}</small>
      )}
      {errorMessage && (
        <small className="mag-text-field__error">{errorMessage}</small>
      )}
    </div>
  );
};
