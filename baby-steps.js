// Get the command-line arguments
const args = process.argv.slice(2);

// Convert arguments to numbers and calculate the sum
const sum = args.reduce((total, arg) => total + Number(arg), 0);

// Print the sum to the console
console.log(sum);
