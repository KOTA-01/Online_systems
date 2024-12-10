import http from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Create the server and listen on port 3000
const server = http.createServer(app);
app.listen(3000, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3000);
});

