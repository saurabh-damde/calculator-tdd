export const add = (numStr: string): number => {
  if (!numStr || numStr.trim() === "") {
    return 0;
  }

  let delimiterRegEx = /,|\n/;
  let numbers = numStr;
  if (numStr.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, delimiterEnd);
    numbers = numbers.substring(delimiterEnd + 1);
    delimiterRegEx = new RegExp(escapeRegExp(delimiter));
  }

  const numArr = numbers
    .split(delimiterRegEx)
    .map(Number)
    .filter((num) => num < 1000);

  const sum = numArr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
