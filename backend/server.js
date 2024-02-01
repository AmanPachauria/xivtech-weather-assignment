const express = require("express");
const cors = require("cors");
const appRouter = require("./routers/appRouter");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use("/",appRouter);

app.listen(PORT,()=>{
  console.log("Server is running");
})

