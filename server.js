const express = require('express')
const axios = require('axios')
const cors = require("cors");
const helmet = require("helmet");
const app = express()
const port = 3000


app.use(helmet());
app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.olaa.la/api/store/products?kw=&catId=0&flagId=1&brandId=0&price=0&skip=0&count=18')
    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json(error)
  }
})
app.get('/test', async (req, res) => {
  try {
    return res.status(200).json({message: 'test'})
  } catch (error) {
    return res.status(400).json(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})