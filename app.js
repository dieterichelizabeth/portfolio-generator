// Variable to hold user command-line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract those arguments and store them into distinct variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
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

console.log(name, github);
console.log(generatePage(name, github));