const express = require('express');
const router = express.Router();

// Define route for the root path
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

module.exports = router;
