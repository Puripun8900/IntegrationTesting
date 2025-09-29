# Hex to RGB Converter API

# Description:
# A simple RESTful API using Express.js that converts hex codes (e.g., #FF5733) to RGB.
# Demonstrates API routes, unit tests, integration tests, and test documentation.

# ==========================
# SETUP
# ==========================

# Clone the repository
git clone https://github.com/Puripun8900/IntegrationTesting.git
cd IntegrationTesting

# Install dependencies
npm install

# Start the API server
npm start
# Server runs on a port (usually 3000)

# ==========================
# API USAGE
# ==========================

# Endpoint: GET /hex-to-rgb/:hex
# Example using curl:
curl http://localhost:3000/hex-to-rgb/#FF5733

# ==========================
# TESTING
# ==========================

# Unit tests (hex-to-RGB function)
npm test

# Integration tests (API route)
npm run test:integration

# Manual testing (Postman or REST Client)
# - Test GET /hex-to-rgb/:hex with multiple hex codes
# - Take screenshots for documentation

# ==========================
# PROJECT STRUCTURE
# ==========================

# src/       → API routes and logic
# tests/     → unit and integration tests
# .gitignore → ignores node_modules, .env, .DS_Store

# ==========================
# NOTES
# ==========================

# - Only valid hex codes are accepted; invalid codes return errors
# - Code includes comments for clarity
# - Tests are reproducible on any machine with Node.js

# ==========================
# LICENSE
# ==========================

# MIT License
