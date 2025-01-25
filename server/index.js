const express = require("express");
const connectDatabase = require("./config/db.connection");
const app = express();
require("dotenv").config({
  path: "./config/.env",
});
const port = process.env.PORT
connectDatabase()
app.listen(port || 4000 , () => {
    console.log(`server is working at ${port}`)
})