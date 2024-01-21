const express = require("express");
const bodyParser = require("body-parser");
const route = require("./controller/controller");
const cookieParser = require('cookie-parser')
const app = express();
const cors = require("cors");
const swaggerDocument = require("../swagger.json")
const swaggerUi = require("swagger-ui-express")


app.use(bodyParser.json());
app.use('/ivan', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use('/user', route)

app.use((error, req, res, _next) => res.send(error.message));
module.exports = app;