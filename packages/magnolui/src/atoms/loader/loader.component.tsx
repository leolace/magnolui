import type { MagElement, MagSizes } from "@mag/types";
import "./loader.scss";
import { createPortal } from "react-dom";

interface Props extends MagElement<"span"> {
  type: "spinner" | "dots";
  absolute?: boolean;
  backdrop?: boolean;
  backdropNode?: HTMLElement;
  size?: Extract<MagSizes, "sm" | "md" | "lg" | "xl">;
}

export const MagLoader = ({
  type = "spinner",
  absolute,
  backdrop,
  backdropNode = document.body,
  size = "md",
}: Props) => {
  const Loader = () => (
    <div className="mag-loader" data-backdrop={backdrop}>
      <span
        className={`mag-loader__${type}`}
        data-absolute={absolute}
        data-size={size}
      />
    </div>
  );

  if (backdrop) return createPortal(<Loader />, backdropNode);
  return <Loader />;
};
