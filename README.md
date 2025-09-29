# Hex to RGB Converter API

## Description
This project is a simple RESTful API built with Express.js that converts hexadecimal color codes (e.g., #FF5733) to RGB format. The API demonstrates REST API implementation, unit testing, integration testing, and documentation of test results.

---

## How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/Puripun8900/IntegrationTesting.git
cd IntegrationTesting
2. Install Dependencies
npm install

3. Run the API
npm start


The server will start on a specified port (usually 3000) and the hex-to-RGB endpoint will be available.

API Endpoint

GET /hex-to-rgb/:hex

Converts a hexadecimal color code to its RGB equivalent.

Parameters:

hex — The hexadecimal color code (e.g., #FF5733).

Responses:

200 OK: Returns RGB values { r, g, b }.

400 Bad Request: Invalid hex code input.

Testing
1. Unit Tests

Test the hex-to-RGB conversion function for different inputs:

npm test

2. Integration Tests

Test the API route with Supertest:

npm run test:integration

3. Manual Tests (Postman or REST Client)

Send requests to the /hex-to-rgb/:hex endpoint with various hex codes.

Take screenshots of responses for documentation.

Project Structure

src/ — Main code for routes and functions.

tests/ — Unit and integration tests.

.gitignore — Excludes unnecessary files (node_modules, .env, .DS_Store).

Notes

Ensure all inputs are valid hex codes; invalid inputs return an error message.

Code contains comments to explain logic.

Tests are reproducible on any machine with Node.js installed.
