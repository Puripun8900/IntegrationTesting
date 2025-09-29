const hexToRgb = require('../src/hexToRgb'); // Now points to the new file

describe('Hex to RGB Conversion - Unit Tests', () => {
  test('Converts #FF5733 to {r:255, g:87, b:51}', () => {
    expect(hexToRgb('FF5733')).toEqual({ r: 255, g: 87, b: 51 });
  });

  test('Throws error for invalid hex "ZZZZZZ"', () => {
    expect(() => hexToRgb('ZZZZZZ')).toThrow('Invalid HEX color.');
  });

  test('Handles hex with # prefix "#00FF00"', () => {
    expect(hexToRgb('#00FF00')).toEqual({ r: 0, g: 255, b: 0 });
  });
});
