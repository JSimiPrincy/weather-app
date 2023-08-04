const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.port;

const app = express();
app.use(cors());
app.use(express.json());
app.get('/weather', (req,res) => {
  res.send('Hello');
})
app.post('/weather', async (req, res) => {
    try {
      const {location} = req.body;
      const apiKey = process.env.key; // Replace this with your actual weather API key
      const defaultLocation = process.env.defaultLocation;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ location||defaultLocation }&appid=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      console.log(response.data);
      
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Unable to retrieve weather data' });
    }
  });


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})