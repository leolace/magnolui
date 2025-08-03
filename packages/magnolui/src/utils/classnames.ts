export const cls = (
  ...args: (string | undefined | null | object | boolean)[]
) => {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      else if (typeof arg === "string") return [arg.trim()];
      else if (typeof arg === "object")
        return Object.entries(arg)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
    })
    .filter(Boolean)
    .join(" ");
};
