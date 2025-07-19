import { classnames } from "@mag/utils/classnames";
import { MagElement } from "../../types";
import "./button.scss";

export interface Props extends MagElement<HTMLButtonElement> {
  disabled?: boolean;

  /**
   * @default "submit"
   */
  buttonType?: "button" | "submit" | "reset";
}

export const MagButton = ({
  children,
  type = "primary",
  buttonType = "submit",
  className,
  ...props
}: Props) => {
  return (
    <button
      className={classnames(`mag-button mag-button-${type}`, className)}
      type={buttonType}
      {...props}
    >
      {children}
    </button>
  );
};
