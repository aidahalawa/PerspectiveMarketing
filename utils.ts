
export const classNames = (...cls: (string | boolean | undefined)[]): string => {
  return cls.filter(Boolean).join(" ");
};
