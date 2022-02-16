const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

// // statement to access fs module's functions
// const fs = require('fs');

// // assign object in module.export to generatePage
// const generatePage = require('./src/page-template');

// // extract those arguments and store them into distinct variables
// const pageHTML = generatePage(name, github);

// // create the HTML file from the string/template literal
// fs.writeFile('./index.html', pageHTML, err => {
//    // if an error exists, an error message is displayed
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

