const express = require('express');
const hexToRgb = require('./hexToRgb'); // Import the function

const app = express();
const PORT = 3000;

app.get('/hex-to-rgb/:hex', (req, res) => {
  const hex = req.params.hex;

  try {
    const rgb = hexToRgb(hex);
    res.status(200).json(rgb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Only start server if not testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app; // Export for integration tests
