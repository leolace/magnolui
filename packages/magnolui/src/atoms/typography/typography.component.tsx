import type { MagElement } from "@mag/types";
import "./typography.scss";
import { cls } from "@mag/utils/classnames";

type AllowedTags = keyof Pick<
  HTMLElementTagNameMap,
  "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "time"
>;

type Props<T extends AllowedTags = "p"> = MagElement<T> & {
  tag?: T;
  type?: "primary" | "secondary" | "danger" | "warn" | "success";
  opacity?: "100" | "80" | "60" | "40" | "20";
};

export const MagTypography = <T extends AllowedTags = "p">({
  tag = "p" as T,
  type = "primary",
  opacity = "100",
  className,
  children,
  ...props
}: Props<T>) => {
  const Component = tag as string;

  return (
    <Component
      className={cls(
        `mag-typography mag-typography__${type} mag-typography__${opacity}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
