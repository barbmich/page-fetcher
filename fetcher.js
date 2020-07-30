fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

const url = args[0];
const fileName = args[1];

const requestWebsite = (url, fileName) => {
  request(url, (error, response, body) => {
    if (error) {return console.log(error)}
    console.log(`Response: ${response}`);
    fs.writeFile(fileName, body, function (err) {
      err ? console.log(err) : console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`)
    });
  });
}

requestWebsite(url, fileName)