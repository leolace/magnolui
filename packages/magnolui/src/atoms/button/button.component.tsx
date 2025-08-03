import type { MagElement } from "@mag/types";
import { cls } from "@mag/utils/classnames";
import "./button.scss";

export interface Props extends MagElement<HTMLButtonElement> {
  type?: "text" | "filled" | "outlined";

  disabled?: boolean;

  /**
   * @default "submit"
   */
  buttonType?: "button" | "submit" | "reset";

  loading?: boolean;
}

export const MagButton = ({
  children,
  type = "filled",
  buttonType = "submit",
  className,
  disabled,
  loading,
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
      {children}
    </button>
  );
};
