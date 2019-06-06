// Dependencies
const cheerio = require('cheerio');
const axios = require('axios');

/**
 * @prop This server is an http request to reddit and returns a console log o the axios response
 *
 */

console.log(`<------------------------------------------------>
            We are loading reddit, hold Tight, cuz we Scrapin!
            <------------------------------------------------>`);

axios.get('https://old.reddit.com/r/webdev/').then(function(response) {
  const $ = cheerio.load(response.data);
});
