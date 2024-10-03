const fs = require('fs');

fs.readFile('text.txt', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('Buffer contents:', data);
  console.log('As string:', data.toString()); // Convert buffer to string for display
});
