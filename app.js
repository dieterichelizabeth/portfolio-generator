// statement to access fs module's functions
const fs = require('fs');

// assign object in module.export to generatePage
const generatePage = require('./src/page-template.js');

// Variable to hold user command-line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract those arguments and store them into distinct variables
const [name, github] = profileDataArgs;

// create the HTML file from the string/template literal
fs.writeFile('index.html', generatePage(name, github), err => {
  // if an error exists, an error message is displayed
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});