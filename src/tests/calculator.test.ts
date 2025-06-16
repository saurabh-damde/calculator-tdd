import { add } from "../main";

describe("String Calculator", () => {
  test("Return 0 for empty string", () => expect(add("")).toBe(0));
  test("Return number itself for single number", () =>
    expect(add("5")).toBe(5));
});
