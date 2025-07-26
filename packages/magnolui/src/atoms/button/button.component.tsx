import { cls } from "@mag/utils/classnames";
import { MagElement } from "../../types";
import "./button.scss";

export interface Props extends MagElement<HTMLButtonElement> {
  disabled?: boolean;

  /**
   * @default "submit"
   */
  buttonType?: "button" | "submit" | "reset";

  loading?: boolean;
}

export const MagButton = ({
  children,
  type = "primary",
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
