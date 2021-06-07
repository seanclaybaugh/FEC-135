const axios = require('axios');
const router = require('express').Router();
const config = require('../config');

const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const authToken = config.token;

// 'atelier' is a path prefix for forwarding requests to atelier
// otherwise, without this path prefix, no other routes will match
// (e.g. static files on the route '/')
// '*' is the wildcard route that will handle all the incoming requests
router.all('/atelier/*', async (req, res) => {
  // console.log(`${req.method}: ${req.url}`);
  console.log('req.method:')
  console.log(req.method)

  console.log('req.url:')
  console.log(req.url)

  // this returns an array of the path components (ex: ['atelier', 'products' 'product_id'])
  const pathComponents = req.url.split('/');
  console.log('pathComponents:')
  console.log(pathComponents)
  // we want everything but the first element of the array
  const apiPath = pathComponents.slice(2).join('/');
  console.log('apiPath:');
  console.log(apiPath)

  // construct the complete request url
  const requestUrl = atelierUrl + apiPath;
  console.log('requestUrl:')
  console.log(requestUrl);

  try {
    const results = await axios({
      method: req.method,
      url: requestUrl,
      headers: { Authorization: authToken },
    });
    res.status(results.status).json(results.data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
