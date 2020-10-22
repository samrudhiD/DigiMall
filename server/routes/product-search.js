
const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('j9cWfT4xyd8xMYxpCGGZ2bWmBcu58oh4TmtNApDwuB8=', 'tflIMqwo7cMq7MNVcXqrEuDy0WbzvxW6OKUNtzaz6mE=');
const index = client.initIndex('Ecomprod');


router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});

//Exporting the module 
module.exports = router;

