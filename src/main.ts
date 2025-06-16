export const add = (numStr: string): number => {
  if (!numStr || numStr.trim() === "") {
    return 0;
  }
  const numbers = numStr.split(",").map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
