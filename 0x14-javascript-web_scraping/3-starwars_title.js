#!/usr/bin/node

const request = require('request');
const filmID = process.argv[2];

request.get(`https://swapi-api.alx-tools.com/api/films/${filmID}`, 'utf-8', (error, response) => {
   if (error) throw error;
   const data = JSON.parse(response);
   const title = data.title;
   console.log(`Title: ${title}`);
});
