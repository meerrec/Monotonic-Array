import { describe, it } from "mocha";
import assert from "assert";
import { isMonotonicArray } from "../isMonotonicArray.js";

describe("", () => {
  const input = [1, 2, 3, 4, 5];
  describe(`${input}`, () => {
    it("should return true", () => {
      assert.equal(isMonotonicArray(input), true);
    });
  });
});
describe("", () => {
  const input = [1, 2, 3, 4, 5];
  describe(`${input}`, () => {
    it("should return true", () => {
      assert.equal(isMonotonicArray(input), true);
    });
  });
});

describe("", () => {
  const input = [6, 5, 4, 4];
  describe(`${input}`, () => {
    it("should return true", () => {
      assert.equal(isMonotonicArray(input), true);
    });
  });
});

describe("", () => {
  const input = [1, 3, 2];
  describe(`${input}`, () => {
    it("should return false", () => {
      assert.equal(isMonotonicArray(input), false);
    });
  });
});

describe("", () => {
  const input = [1, 1];
  describe(`${input}`, () => {
    it("should return true", () => {
      assert.equal(isMonotonicArray(input), true);
    });
  });
});
