import type { MagElement } from "@mag/types";
import { cls } from "@mag/utils/classnames";
import "./button.scss";
import type { ReactNode } from "react";

export interface Props extends Omit<MagElement<"button">, "type"> {
  type?: "text" | "filled" | "outlined";

  disabled?: boolean;

  /**
   * @default "submit"
   */
  buttonType?: "button" | "submit" | "reset";

  loading?: boolean;

  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const MagButton = ({
  children,
  type = "filled",
  buttonType = "submit",
  className,
  disabled,
  loading,
  startIcon,
  endIcon,
  ...props
}: Props) => {
  const buttonClasses = {
    "mag-button__disabled": disabled,
    "mag-button__loading": loading,
  };

  return (
    <button
      className={cls(
        `mag-button mag-button__${type}`,
        buttonClasses,
        className,
      )}
      disabled={disabled || loading}
      type={buttonType}
      {...props}
    >
      <div className="mag-button__content">
        {startIcon}
        <div className="mag-button__children">{children}</div>
        {endIcon}
      </div>
    </button>
  );
};
