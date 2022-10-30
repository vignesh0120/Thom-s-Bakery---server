const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./src/routes/thomsRoutes");
app.use("/thoms", router);

app.listen(port);
