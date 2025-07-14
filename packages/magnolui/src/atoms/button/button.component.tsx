import { MagElement } from "../../types";
import styles from "./button.module.css";

export interface Props extends MagElement<HTMLButtonElement> {
  /**
   * @default false
   */
  disabled?: boolean;
}

export const MagButton = ({ children, disabled = false }: Props) => {
  return (
    <button disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
};
