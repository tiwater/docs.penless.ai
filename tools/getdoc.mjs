import express from 'express';
import fetch from 'node-fetch';
import fs from 'fs';

const app = express();

const FILE_URL = 'https://penless.ai/api/docs';
const SAVE_PATH = './openapi.json';

const fetchAndSaveFile = async () => {
  try {
    const response = await fetch(FILE_URL);
    const fileStream = fs.createWriteStream(SAVE_PATH);
    response.body.pipe(fileStream);
    console.log('File saved successfully');
  } catch (error) {
    console.error('Error fetching and saving file:', error);
  }
};

const INTERVAL_MS = 60000; // Fetch the file every 5 seconds

app.listen(3004, () => {
  console.log('Server is running on port 3004');

  // Start the timer to fetch and save the file periodically
  setInterval(fetchAndSaveFile, INTERVAL_MS);
});
