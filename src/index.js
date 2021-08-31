const URL = process.env.API_URL
const { summarize } = require('./lib');

if (!URL) {
  console.error("API_URL required");
  process.exit(1);
}

summarize(URL);
