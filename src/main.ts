export const add = (numStr: string): number => {
  if (!numStr || numStr.trim() === "") {
    return 0;
  }
  return parseInt(numStr);
};
