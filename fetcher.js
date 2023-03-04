// to ignore first two elements outputed by terminal
var args = process.argv.slice(2);

const request = require('request');

// these messages help to determine the status of the connection - do we move forward with the write function or not?
request(args[0], (error, response, body) => {
  console.log('error:', error); // Print error if error has occured
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const fs = require('fs');

  // content is equal to text body coming from web server page
  const content = body;
  // path is equal to the file name we want to write the body to
  const path = args[1];

  // function downloads the body in the selected file
  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

  // length of the file = bytes
  let totalBytes = content.length;

  console.log(`Downloaded and saved ${totalBytes} bytes to ${path}`);
})

