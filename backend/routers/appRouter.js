const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const appRouter = express.Router();
dotenv.config();
const KEY = process.env.OPEN_WEATHER_API_KEY;
appRouter.get("/", (req, res) => {
  res.send("<h1>welcome to xivtech</h1>");
});

appRouter.post("/", async (req, res) => {
  let resp = {
    weather: {}
  };
  console.log(req.body);
  await Promise.all(req.body.city.map(async (e)=>{
      const resp1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=${KEY}`
      );
      
     resp.weather[e]=(resp1.data.main.temp)+"C";
   })
  );
  console.log(resp);
  res.send(resp);
});

module.exports = appRouter;
