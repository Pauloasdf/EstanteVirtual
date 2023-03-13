const express = require('express');
const router = express.Router();
const axios = require("axios");
require('dotenv').config();
const { logMessage } = require('../utils/logging.js')

router.get('/title/:title', async (req, res) => {
    logMessage("Getting books with title " + req.params.title)
    axios.get(`${process.env.OPEN_LIBRARY_URL}?title=${req.params.title}`)
        .then(data => res.send(data.data.docs))
})

router.get('/cover/:isbn', async (req, res) => {
    logMessage("Getting cover for book with ISBN " + req.params.isbn)
    axios.get(`${process.env.COVERS_OPEN_LIBRARY_URL}/${req.params.isbn}-M.jpg`)
        .then(data => res.send("<img src='" + data.pathname + "'/>"))
})


module.exports = router
