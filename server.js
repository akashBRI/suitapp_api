const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/app", require("./routes/companyRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});