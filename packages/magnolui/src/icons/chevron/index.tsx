import "./styles.scss";

interface Props {
  size?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const MagIconChevron = ({ direction = "right", size = 24 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={`mag-icon__chevron mag-icon__chevron__${direction}`}
    >
      <rect width={size} height={size} fill="var(--primary-color)" />
      <path
        d="M12 15L7 9H17L12 15Z"
        fill="var(--secondary-color)"
        stroke="var(--secondary-color)"
      />
    </svg>
  );
};
