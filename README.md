# Clone the repository
git clone https://github.com/Puripun8900/IntegrationTesting.git
cd IntegrationTesting

# Install dependencies
npm install

# Run the API server
npm start

# Unit tests for hex-to-rgb function
npm test

# Integration tests for API route
npm run test:integration

# Manual tests
# Use Postman or REST Client to send requests to:
# GET http://localhost:3000/hex-to-rgb/:hex
# Example:
# GET http://localhost:3000/hex-to-rgb/#FF5733

# Notes:
# - Ensure hex code input is valid
# - Take screenshots of Postman or REST Client tests for documentation
# - Remove unnecessary files from repo (node_modules, .env, .DS_Store)
