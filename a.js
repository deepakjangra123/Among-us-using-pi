const fs = require('fs');

// Function to convert a single digit to its 4-bit binary representation
function digitToBinary(digit) {
    return parseInt(digit, 10).toString(2).padStart(4, '0');
}

// Function to process the input file and save binary representations to the output file
function processDigits(inputFilePath, outputFilePath) {
    // Read the content of the input file
    fs.readFile(inputFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }

        // Remove any non-digit characters (e.g., newlines) and convert each digit to binary
        const binaryDigits = data
            .replace(/\D/g, '') // Remove non-digit characters
            .split('')         // Split into individual digits
            .map(digitToBinary) // Convert each digit to binary
            .join(' ');         // Join binary representations with a space

        // Write the binary representation to the output file
        fs.writeFile(outputFilePath, binaryDigits, (err) => {
            if (err) {
                console.error(`Error writing file: ${err.message}`);
            } else {
                console.log(`Binary representations saved to ${outputFilePath}`);
            }
        });
    });
}

// Example usage
const inputFilePath = 'bigpi.txt';  // Path to the input file containing digits
const outputFilePath = 'binary_digits.txt'; // Path to the output file for binary representation

processDigits(inputFilePath, outputFilePath);
