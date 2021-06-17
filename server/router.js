const axios = require('axios');
const router = require('express').Router();
const config = require('../config');

const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const authToken = config.token;

router.all('/api/*', async (req, res) => {
  const pathComponents = req.url.split('/');

  const apiPath = pathComponents.slice(2).join('/');

  const requestUrl = atelierUrl + apiPath;

  try {
    const results = await axios({
      method: req.method,
      url: requestUrl,
      headers: { Authorization: authToken },
      data: req.body,
    });
    res.status(results.status).send(results.data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
