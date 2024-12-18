# React Pilot

I built this while learning the MERN stack as a part of my ICSI 518 Software Engineering class at UAlbany. This project consists of a series of gradual assignments designed to help you learn the MERN stack step-by-step. Each assignment builds on the previous one, introducing new concepts and techniques to enhance your understanding of full-stack development.

Try it out [here](https://reactpilot.vercel.app)

## Technologies Used

### Backend

- **Express.js**: Handles API calls and database interactions.

### Frontend

- **React.js**: Provides a dynamic user interface with real-time updates.

### Database

- **MongoDB**: Used for data storage and retrieval.

### Deployment

- Originally deployed on Amazon EC2, now migrated to Vercel for hosting.

## Project Structure

The project is organized into two main directories: `back-end` and `front-end`.

### back-end

- **api/**: Contains the API routes for different functionalities.
  - `addition.js`: Handles addition operations.
  - `index.js`: Main entry point for the backend.
  - `inventory.js`: Manages inventory-related operations.
  - `users.js`: Manages user-related operations.
- **config/**: Configuration files for the backend.
  - `database.js`: MongoDB connection setup.
  - `dotenv.js`: Environment variable configuration.
- **database-models/**: Mongoose models for MongoDB collections.
  - `product.js`: Schema for product data.
  - `user.js`: Schema for user data.
- `.env`: Environment variables for the backend.
- `package.json`: Backend dependencies and scripts.
- `vercel.json`: Configuration for Vercel deployment.

### front-end

- **public/**: Static files for the frontend.
  - `index.html`: Main HTML file.
  - `manifest.json`: Web app manifest.
  - `robots.txt`: Robots exclusion protocol.
- **src/**: Source code for the frontend.
  - **assets/**: Static assets like images.
  - **components/**: React components.
  - **services/**: API service functions.
  - **styling/**: CSS files for styling.
  - `index.js`: Main entry point for the frontend.
- `.env`: Environment variables for the frontend.
- `package.json`: Frontend dependencies and scripts.

### Environment Variables

Both the frontend and backend use environment variables to manage configuration settings.

#### back-end

- **.env**: Contains environment variables for the backend.
  - `PORT`: The port number on which the backend server runs.
  - `MONGODB_URI`: The connection string for MongoDB.

#### front-end

- **.env**: Contains environment variables for the frontend.
  - `REACT_APP_BACKEND_URL`: The URL of the backend server.

These environment variables are essential for configuring the application to run correctly in different environments (development, production, etc.).

## Instructions to Use the Project

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/satwikbhasin/react-pilot
   cd react-pilot
2. **Backend Setup:**

   ```sh
   cd back-end
   npm install
3. **Frontend Setup:**

   ```sh
   cd ../front-end
   npm install
### Running the Project

1. **Start the backend server:**

   ```sh
   cd back-end
   npm start
2. **Start the frontend server:**

   ```sh
   cd ../front-end
   npm start
3. **Open your browser and navigate to:**

   ```sh
   http://localhost:3000

You should now see the React Pilot application running locally.
