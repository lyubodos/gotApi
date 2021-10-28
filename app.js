const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv/config");

const heroRouter = require("./routes/heroes");
const housesRouter = require("./routes/housesRoutes");

const app = express();

const port = process.env.PORT || 4000;
const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", ()=> {
    console.log("Server is connected to the GoT MongoDB");
});


app.use(express.json());
app.use(cors());


app.use("/heroes", heroRouter);
app.use("/houses", housesRouter);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});