import type { MagElement } from "@mag/types";
import { cls } from "@mag/utils/classnames";
import "./label.scss";

export const MagLabel = ({
  children,
  className,
  ...props
}: MagElement<"label">) => {
  return (
    <label className={cls("mag-label", className)} {...props}>
      {children}
    </label>
  );
};
