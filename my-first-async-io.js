const fs = require('fs');

// Get the file path from command line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err.message);
    return;
  }

  // Split the file contents by newline characters and count the number of lines
  const numberOfLines = data.split('\n').length - 1;

  // Print the result to the console
  console.log(numberOfLines);
});
