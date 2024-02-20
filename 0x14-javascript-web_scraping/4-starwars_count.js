#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body).results;
  const newdata = data.filter(films => films.characters.some(characters =>
    characters.includes('/18')));
  console.log(newdata.length);
});
