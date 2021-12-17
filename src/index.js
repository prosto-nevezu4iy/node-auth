const express = require("express");
require("./db/mongoose");
const authRouter = require("./routes/auth.route");
const { errorHandler } = require("./middlewares/error");
const app = express();

const port = process.env.PORT || 3000;

// parse json request body
app.use(express.json());

app.use("/", authRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
