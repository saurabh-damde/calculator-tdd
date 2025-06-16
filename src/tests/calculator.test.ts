import { add } from "../main";

describe("String Calculator", () => {
  test("Returns 0 for empty string", () => expect(add("")).toBe(0));
});
