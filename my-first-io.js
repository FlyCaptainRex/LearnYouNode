const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file synchronously
const fileContents = fs.readFileSync(filePath, 'utf8');

// Split the file contents by newline characters and count the number of lines
const numberOfLines = fileContents.split('\n').length - 1;

// Print the result to the console
console.log(numberOfLines);
