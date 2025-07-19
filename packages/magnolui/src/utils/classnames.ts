export const classnames = (...args: (string | undefined | null)[]) => {
  return args.filter(Boolean).join(" ");
};
