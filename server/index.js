import express from 'express';
import morgan from 'morgan';
import {PORT} from './config.js';
import indexRoutes from './routes/index.routes.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(indexRoutes);

app.use(morgan('dev'));

app.listen(PORT)
console.log('Server listening on port ' + PORT);