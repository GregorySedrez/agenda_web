const express = require ("express");
const app = express();
const cors = require('cors');

const router = require('./route');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api',router);

//define porta e começa a escutar.
app.listen(8888, () => {
    console.log("Server is running on port 8888.");
  });