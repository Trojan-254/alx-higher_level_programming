#!/usr/bin/node
const fs = require('fs');

const fileName = process.argv[2];
const stringy = process.argv[3];

fs.writeFile(fileName, stringy, 'utf8', (err) => {
  if (err) throw err;
});
