import { add } from "../main";

describe("String Calculator", () => {
  test("Return 0 for empty string", () => expect(add("")).toBe(0));
  test("Return number itself for single number", () =>
    expect(add("5")).toBe(5));
  test("Return sum of two comma-separated numbers", () =>
    expect(add("2,3")).toBe(5));
  test("Return sum of two comma-separated numbers", () =>
    expect(add("1,3,5,7,9")).toBe(25));
});
