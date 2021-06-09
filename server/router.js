const axios = require('axios');
const router = require('express').Router();
const config = require('../config');

const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const authToken = config.token;

// router.all is routing all the requests coming to '/api/, whether its get, post, put, or delete

// '/api' is a path prefix for forwarding requests to api
// otherwise, without this path prefix, no other routes will match
// (e.g. static files on the route '/')
// '*' is the wildcard route that will handle all the incoming requests
router.all('/api/*', async (req, res) => {
  // this returns an array of the path components (ex: ['', 'api', 'products' 'product_id'])
  const pathComponents = req.url.split('/');

  // we want everything but the first two elements of the array
  const apiPath = pathComponents.slice(2).join('/');

  // construct the complete request url
  const requestUrl = atelierUrl + apiPath;

  try {
    const results = await axios({
      method: req.method,
      url: requestUrl,
      headers: { Authorization: authToken },
      data: req.body,
    });
    console.log('SERVER IS SENDING BACK:')

    console.log(results.data)
    res.status(results.status).send(results.data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;

// client side example: axios.get('/api/products')
// axios.post('/api/reviews?product_id=${product.id}', req.body)
