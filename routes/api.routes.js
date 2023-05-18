const express = require('express');
const router = express.Router();

const Marker = require('../models/Marker.model')

router.get("/markers", (req, res, next) => {
  Marker
    .find()
    .then(markers => {res.json(markers)})
    .catch(err => next(err))
});

module.exports = router