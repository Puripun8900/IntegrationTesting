# IntegrationTesting

## Setup
```bash
git clone https://github.com/Puripun8900/IntegrationTesting
cd IntegrationTesting
npm install


Start the Server

To run the Express server:

npm start


Server will run at: http://localhost:3000

API Route

GET /hex-to-rgb/:hex

Converts a hexadecimal color code to RGB format.

Example requests:

Valid hex:

GET http://localhost:3000/hex-to-rgb/FF5733


Response:

{ "r": 255, "g": 87, "b": 51 }


Invalid hex:

GET http://localhost:3000/hex-to-rgb/ZZZZZZ


Response:

{ "error": "Invalid HEX color." }

Testing
Unit Tests

Tests the hexToRgb function separately.

npm run test:unit

Integration Tests

Tests the API route with Express.

npm run test:integration

Run All Tests
npm test


Note: On Windows, if NODE_ENV is needed, use cross-env as in the package.json scripts.

Manual API Testing

You can test the API using Postman or REST Client in VS Code:

Send a GET request to http://localhost:3000/hex-to-rgb/<hex>.

Replace <hex> with the desired hex color code.

Check the JSON response.
