// src/hexToRgb.js

function hexToRgb(hex) {
  hex = hex.replace(/^#/, ''); // Remove # if present

  // Check for valid length
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  // Ensure the string contains only 0-9 or A-F/a-f
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid HEX color.');
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

module.exports = hexToRgb;
