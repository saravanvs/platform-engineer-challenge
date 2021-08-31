const fetch = require('node-fetch');

const extractSummary = ({ full_name, html_url, description }) => ({ full_name, html_url, description });

function summarize(url) {
  fetch(`https://${url}`)
    .then(results => 
      results.json()
      .then(json => json
        .map(extractSummary)
        .forEach(({full_name, html_url, description}) => {
          console.log(`\nName: ${full_name}\nDescription: ${description}\nURL:${html_url}\n`);
        })))
    .catch(e => console.error(e));
}

module.exports = { extractSummary, summarize };
