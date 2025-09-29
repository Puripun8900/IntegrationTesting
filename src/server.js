const express = require("express");
const app = express();
const port = 3000;

/**
 * Convert HEX color string to RGB object
 * @param {string} hex - Hexadecimal color (e.g. "#ff0000" or "ff0000")
 * @returns {{r:number,g:number,b:number}} RGB object
 */
function hexToRgb(hex) {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color format");
  }
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
}

app.get("/hex-to-rgb", (req, res) => {
  try {
    const { hex } = req.query;
    const rgb = hexToRgb(hex);
    res.json(rgb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = { app, hexToRgb };

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
