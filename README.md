Hex to RGB Converter API

Convert hexadecimal color codes (e.g., #FF5733) to RGB using Express.js. Includes unit tests, integration tests, and instructions for manual testing.

Setup

Clone the repository:

git clone https://github.com/Puripun8900/IntegrationTesting.git

cd IntegrationTesting

Install dependencies:

npm install

Run the API server:

npm start

API Endpoint

GET /hex-to-rgb/:hex

hex → hexadecimal color code (e.g., #FF5733)

200 OK → returns { r, g, b }

400 Bad Request → invalid input

Example test: curl http://localhost:3000/hex-to-rgb/#FF5733

You can also test using Postman or REST Client.

Testing

Unit tests: npm test

Integration tests: npm run test:integration

Manual tests: Send requests to /hex-to-rgb/:hex in Postman and take screenshots for documentation.

Project Structure

src/ → API routes and logic
tests/ → unit & integration tests
.gitignore → ignores node_modules, .env, .DS_Store

Notes

Only valid hex codes are accepted.
Code contains comments for clarity.
Tests run on any machine with Node.js installed.

License

MIT License
