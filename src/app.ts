import  express  from "express";
import  "./database/config/connection";
import dotenv from "dotenv";
import mongoose from "mongoose";
// Load environment variables from a .env file into process.env 
dotenv.config();

// Create an instance for an Express application
const app = express();

app.use(express.json());

// Define the port, it will use the value from the environment variable PORT or default to 3000 if not set
const port: any = process.env.PORT || 3000;

// Define a route for HTTP GET requests to the root URL ("/")
// When successfully accessed it will send back the response "This is my first express server"
app.get("/", (req, res) => {
    res.send("This is my first Express server");
})

// Set up the application to listen on the defined  port
// Once the server starts successfully, it will log "Server is running on port [port]"

app.listen(port, () => {
     console.log("Server is running on port:", port);
})