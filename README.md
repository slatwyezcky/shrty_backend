# shrty.me - URL Shortener (Frontend)

This repository contains the backend code for a URL shortener service built using Express.js, MongoDB, and Node.js. The backend provides API methods for handling URL shortening functionalities.

## API Endpoints

### GET `/api/:alias`

This endpoint retrieves the original URL associated with the provided alias.

- **Parameters**:

  - `:alias` - The alias assigned to the shortened URL.

- **Response**:
  - If the alias exists in the database, the response will be a JSON object containing the original URL.
  - If the alias does not exist, the response will be an error message indicating that the provided alias is not found in the database.

### POST `/api/`

This endpoint creates a shortened URL and associates it with an optional alias.

- **Request Body**:

  - `url` (required): The original URL to be shortened.
  - `alias` (optional): The custom alias to be assigned to the shortened URL. If not provided, a random alias will be generated.

- **Response**:
  - If the URL is successfully shortened, the response will be a JSON object containing the created alias.
  - If the alias provided in the request already exists in the database, the response will be an error message indicating a duplicate alias.
  - If there are any issues with the server while processing the request (e.g., database connection failure), the response will be an error message indicating that the server is not responding.

## Dependencies

- Node.js
- Express.js
- MongoDB

## Setup

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Ensure MongoDB is running locally or update the MongoDB connection URI in the code accordingly.
4. Start the server using `npm start`.

## Contributing

Contributions are welcome! Please feel free to open a pull request or submit an issue for any improvements or additional features you'd like to see implemented.

## License

This project is licensed under the MIT License.
