import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set the port for Azure Web App
const PORT = process.env.PORT || 8080;

// Enable gzip compression for all responses
app.use(compression());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// For any request that doesn't match a static file, serve index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at https://devops-web-app-a4hdgre7ekddhmgz.canadacentral-01.azurewebsites.net`);
});

