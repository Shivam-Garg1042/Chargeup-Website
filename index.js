//index.js
import express from "express";

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/config/database.js";



// Import routes
import contactRoutes from "./src/routes/contactRoutes.js"



// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/contact', contactRoutes);

app.get('/',(req,res)=>{
  res.send("ready");
})


// Other routes can be added here
// app.use('/api/other-route', otherRoutes);

const PORT =  5000;
app.listen(5000,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));