// statement to access fs module's functions
const fs = require('fs');

// Variable to hold user command-line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract those arguments and store them into distinct variables
const [name, github] = profileDataArgs;

// (in functions w/ no paramaters, empty () are required)
// arrow function that can receive input and display the data dynamically as a string
// inserts them in a HTML template literal
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

// create the HTML file from the string/template literal
fs.writeFile('index.html', generatePage(name, github), err => {
  // if an error exists, an error message is displayed
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});