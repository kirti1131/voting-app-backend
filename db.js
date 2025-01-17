// const mongoose = require("mongoose");
// require("dotenv").config();

// // Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL; // Replace 'mydatabase' with your database name
// // const mongoURL = process.env.MONGODB_URL;

// // Set up MongoDB connection
// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Get the default connection
// // Mongoose maintains a default connection object representing the MongoDB connection.
// const db = mongoose.connection;

// // Define event listeners for database connection

// db.on("connected", () => {
//   console.log("Connected to MongoDB server");
// });

// db.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

// db.on("disconnected", () => {
//   console.log("MongoDB disconnected");
// });

// // Export the database connection
// module.exports = db;
const mongoose = require("mongoose");
require("dotenv").config();

// Fetch the MongoDB URI from environment variables
const mongoURL = process.env.MONGODB_URL_LOCAL; // MongoDB connection URL from .env

// Check if the URL is defined
if (!mongoURL) {
  console.error("MongoDB URI is not defined in the .env file!");
  process.exit(1); // Exit if the URI is not provided
}

// Set up the MongoDB connection
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});

// Export the database connection (optional)
module.exports = db;
