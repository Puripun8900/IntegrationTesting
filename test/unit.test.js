const { expect } = require("chai");
const { hexToRgb } = require("../src/server");

describe("Unit Test: hexToRgb()", () => {
  it("should convert hex to rgb correctly", () => {
    expect(hexToRgb("#ff0000")).to.deep.equal({ r: 255, g: 0, b: 0 });
    expect(hexToRgb("00ff00")).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it("should throw error on invalid hex", () => {
    expect(() => hexToRgb("xyz")).to.throw("Invalid hex color format");
  });
});
