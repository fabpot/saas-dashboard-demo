var express = require('express');
const bodyParser = require('body-parser')
var router = express.Router();
const query = require('../utilities/pgquery');

router.get('/', async (req, res, next) => {
    try {
    const result = await query('SELECT content FROM data WHERE id = 1')
    res.send(JSON.stringify(result.rows[0].content))
    } catch (error) {
    return next(error);
  }
})

router.post('/', bodyParser.json(), async (req, res, next) => {
  try {
    const title = req.body.title;
    const result = await query(`UPDATE data SET content = '{ "title": "${title}" }' WHERE id = 1`)
    res.send(result)
  } catch (error) {
    return next(error);
  }
})

module.exports = router;
