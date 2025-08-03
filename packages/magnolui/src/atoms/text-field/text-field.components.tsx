import type { MagElement } from "@mag/types";
import { cls } from "@mag/utils/classnames";
import "./text-field.scss";

interface Props extends MagElement<HTMLInputElement> {
  id: string;
  name: string;
  description?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  required?: boolean;
}

export const MagTextField = ({
  id,
  name,
  label,
  description,
  className,
  disabled,
  required,
  ...props
}: Props) => {
  return (
    <div className={cls("mag-text-field", className)} data-disabled={disabled}>
      {label && (
        <label
          htmlFor={id}
          className={cls(
            "mag-text-field__label",
            required && "mag-text-field__label-required",
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={cls("mag-text-field__input", className)}
        disabled={disabled}
        required={required}
        {...props}
      />
      {description && (
        <small className="mag-text-field__description">{description}</small>
      )}
    </div>
  );
};
