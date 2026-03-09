import express, { Request, Response } from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '../../public')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../../index.html'));
});

app.listen(8080, '::');
