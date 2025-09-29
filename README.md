Hex to RGB Converter API
Description

This project is a simple RESTful API built with Express.js.
It converts hexadecimal color codes (like #FF5733) into RGB format.
The project demonstrates API routes, unit tests, integration tests, and documentation of results.

Setup & Run
Clone Repository
git clone https://github.com/Puripun8900/IntegrationTesting.git
cd IntegrationTesting

Install Dependencies
npm install

Start the API
npm start


The server will start on a port (usually 3000).
You can now access the hex-to-RGB API.

API Endpoint

GET /hex-to-rgb/:hex

Converts a hexadecimal color code to RGB.

Parameters: hex — the hex code (e.g., #FF5733)

Responses:

200 OK → returns { r, g, b }

400 Bad Request → invalid hex code

Example using curl:

curl http://localhost:3000/hex-to-rgb/#FF5733

Testing
Unit Tests
npm test

Integration Tests
npm run test:integration

Manual Tests

Use Postman or REST Client to test /hex-to-rgb/:hex.

Example: GET http://localhost:3000/hex-to-rgb/#FF5733

Take screenshots of results for documentation.

Project Structure

src/ — contains API routes and logic

tests/ — contains unit and integration tests

.gitignore — excludes node_modules, .env, .DS_Store

Notes

Ensure all hex codes are valid. Invalid codes return errors.

Code is commented for clarity.

Tests are reproducible on any machine with Node.js installed.

License

MIT License
