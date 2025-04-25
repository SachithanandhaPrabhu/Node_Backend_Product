// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productroute = require('./routers/product.routes')
const dotenv =require('dotenv');
dotenv.config();
// MIDDLEWARE CONVERTING JSON
app.use(express.json());
//Test a API
app.get('/', (req, res) => {
  res.send('Hello World')
})
//api routes
app.use('/api/products',productroute);
app.listen(3000)
// connecting mongodb
mongoose.connect(process.env.MONGODB_CONNECTION )
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Not connected',error))
  