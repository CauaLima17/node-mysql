import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectory = path.join(__dirname, '../public');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));
console.log(publicDirectory)
app.use(express.json());

export default app;