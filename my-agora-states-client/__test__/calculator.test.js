const add = require("./Calculator");

it("add correctly", () => {
  expect(add(3, 5)).toBe(7);
});
