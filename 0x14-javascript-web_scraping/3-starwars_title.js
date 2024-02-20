#!/usr/bin/node

const request = require('request');
const filmID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmID}`;

request.get(url, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  const title = data.title;
  console.log(`${title}`);
});
