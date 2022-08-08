import { Add } from "../src/components/calculator";

it("add correctly", () => {
  expect(Add(3, 5)).toBe(15);
});
