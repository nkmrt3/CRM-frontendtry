const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Or any other port you prefer

// Serve the static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// For all other routes, send the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
